package com.fulton_shaw.idea.plugin.x1.action.util;

import com.fulton_shaw.common.lang.value.Pack;
import org.apache.ibatis.annotations.Case;

import javax.annotation.Nonnull;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Pattern;

/**
 * @author xiaohuadong  (put comment here)
 * @date 2019/04/19
 */
public class StringCaseUtils {
    private StringCaseUtils() {
    }

    public static enum WordType {
        UPPERED {
            @Override
            public boolean matchesType(String word) {
                return isAllMatchesCase(true, word, 0, word.length());
            }

            @Override
            public String convert(String word) {
                return word.toUpperCase();
            }
        }, CAPITALIZED {
            @Override
            public boolean matchesType(String word) {
                int n = word.length();
                if (n == 0) {
                    return false;
                }
                if (!Character.isUpperCase(word.charAt(0))) {
                    return false;
                }
                return n == 1 || isAllMatchesCase(false, word, 1, word.length());
            }

            @Override
            public String convert(String word) {
                if (word == null || word.length() == 0) {
                    return word;
                }
                return Character.toUpperCase(word.charAt(0)) + word.substring(1).toLowerCase();
            }
        }, LOWERED {
            @Override
            public boolean matchesType(String word) {
                return isAllMatchesCase(false, word, 0, word.length());
            }

            @Override
            public String convert(String word) {
                return word.toLowerCase();
            }
        };

        abstract public boolean matchesType(String word);

        abstract public String convert(String word);
    }

    public static enum CaseType {
        CAMEL_CASE(null, null) {
            @Override
            int locateFirstWordEnd(String s) {
                int indexUpper = indexOfCase(true, s, 0, s.length());
                if (indexUpper == 0) {
                    return -1;
                }
                if (indexUpper == -1) {
                    return s.length();
                }
                return indexUpper;
            }

            @Override
            int locateNextWordStart(String s, int start) {
                return PASCAL_CASE.locateNextWordStart(s, start);
            }

            @Override
            int locateNextWordEnd(String s, int start) {
                return PASCAL_CASE.locateNextWordEnd(s, start);
            }

            @Override
            String convert(String word, int i) {
                if (i == 0) {
                    return WordType.LOWERED.convert(word);
                }
                return WordType.CAPITALIZED.convert(word);
            }
        },
        PASCAL_CASE("", WordType.CAPITALIZED) {
            @Override
            int locateFirstWordEnd(String s) {
                if (!Character.isUpperCase(s.charAt(0))) {
                    return -1;
                }
                int i = indexOfCase(true, s, 1, s.length());
                return i == -1 ? s.length() : i;
            }

            @Override
            int locateNextWordStart(String s, int start) {
                for (int i = start; i < s.length(); ++i) {
                    if (Character.isUpperCase(s.charAt(i))) {
                        return i;
                    }
                }
                return s.length();
            }

            @Override
            int locateNextWordEnd(String s, int start) {
                if (!Character.isUpperCase(s.charAt(start))) {
                    return -1;
                }
                int i = indexOfCase(true, s, start + 1, s.length());
                return i == -1 ? s.length() : i;
            }
        },
        UPPER_CASE("_", WordType.UPPERED),
        SNAKE_CASE("_", WordType.LOWERED),
        SNAKE_CASE_DOT(".", WordType.LOWERED),
        SNAKE_CASE_COLON(":", WordType.LOWERED),
        ;
        String split;
        WordType wordType;

        CaseType(String split, WordType wordType) {
            this.split = split;
            this.wordType = wordType;
        }

        /**
         * return the location of the end of the first word, -1 if invalid
         *
         * @param s
         * @return -1 if invalid
         */
        int locateFirstWordEnd(String s) {
            return locateNextWordEnd(s, 0);
        }

        /**
         * @param s
         * @param start the start point, must be start  < s.length()
         * @return
         */
        int locateNextWordEnd(String s, int start) {
            int i = s.indexOf(split, start);
            i = i == -1 ? s.length() : i;
            String word = s.substring(start, i);
            if (!wordType.matchesType(word)) {
                return -1;
            }
            return i;
        }

        /**
         * locate from last word end
         *
         * @param s
         * @param start
         * @return
         */
        int locateNextWordStart(String s, int start) {
            if (start == s.length()) {
                return s.length();
            }
            if (s.substring(start).startsWith(split)) {
                return start + split.length();
            }
            return -1;
        }


        public List<String> split(String s) {
            int i = locateFirstWordEnd(s);
            String word = i != -1 ? s.substring(0, i) : null;
            boolean checked = word != null && checkWordOnlyAlphabet(word);
            if (!checked) {
                return Collections.emptyList();
            }
            List<String> words = new ArrayList<>();
            words.add(word);
            while (i < s.length()) {
                int start = locateNextWordStart(s, i);
                int end = start != -1 ? locateNextWordEnd(s, start) : -1;
                word = end != -1 ? s.substring(start, end) : null;
                checked = word != null && checkWordOnlyAlphabet(word);
                if (!checked) {
                    return Collections.emptyList();
                }
                words.add(word);
                i = end;
            }
            return words;
        }

        boolean checkWordOnlyAlphabet(String word) {
            int n = word.length();
            for (int i = 0; i < n; i++) {
                if (!Character.isLetter(word.charAt(i))) {
                    return false;
                }
            }
            return true;
        }

        public String join(List<String> s) {
            StringBuilder stringBuilder = new StringBuilder();
            String split = this.split == null ? "" : this.split;
            for (int i = 0; i < s.size(); i++) {
                stringBuilder.append(convert(s.get(i), i)).append(split);
            }
            if (!split.isEmpty() && stringBuilder.length() > 0) {
                stringBuilder.delete(stringBuilder.length() - split.length(), stringBuilder.length());
            }
            return stringBuilder.toString();
        }

        String convert(String word, int i) {
            return wordType.convert(word);
        }
    }

    public static boolean isAllMatchesCase(boolean upper, String s, int start, int end) {
        if (start == end) {
            return false;
        }
        for (int i = start; i < end; ++i) {
            if (upper) {
                if (!Character.isUpperCase(s.charAt(i))) {
                    return false;
                }
            } else {
                if (!Character.isLowerCase(s.charAt(i))) {
                    return false;
                }
            }
        }
        return true;
    }

    public static int indexOfCase(boolean upper, String s, int start, int end) {
        for (int i = start; i < end; i++) {
            if (upper) {
                if (Character.isUpperCase(s.charAt(i))) {
                    return i;
                }
            } else {
                if (Character.isLowerCase(s.charAt(i))) {
                    return i;
                }
            }
        }
        return -1;
    }

    public static List<String> getCaseType(String s, CaseType srcType) {
        return srcType.split(s);
    }

    public static List<String> getCaseType(String s, Pack<CaseType> caseType) {
        if (s == null) {
            return null;
        }
        for (CaseType value : CaseType.values()) {
            List<String> split = value.split(s);
            if (!split.isEmpty()) {
                if (caseType != null) {
                    caseType.set(value);
                }
                return split;
            }
        }
        return Collections.emptyList();
    }

    public static String toCaseType(String s, CaseType srcType, CaseType targetCaseType) {
        List<String> caseType = getCaseType(s, srcType);
        if (caseType.isEmpty()) {
            return "";
        }
        return targetCaseType.join(caseType);
    }

    public static String toCaseType(String s, CaseType targetCaseType) {
        List<String> caseType = getCaseType(s, (Pack<CaseType>) null);
        if (caseType.isEmpty()) {
            return "";
        }
        return targetCaseType.join(caseType);
    }
}
