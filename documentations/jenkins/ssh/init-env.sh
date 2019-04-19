###=================INITIALIZE ENVIORMENT===================
# server_env  <=== provided by user
SERVICE=ads-admin
HOST=$(echo "${server_env}"|cut -d '-' -f1)
ENV=$(echo "${server_env}"|cut -d '-' -f2)
ID_FILE=~/.ssh/id_rsa_xhd2015
WAR_FILE=vivo-${SERVICE}/target/${SERVICE}.war

# empty
echo > env.sh

cat >> env.sh << EOF
ID_FILE="${ID_FILE}"
SERVICE="${SERVICE}"
WAR_FILE="${WAR_FILE}"
HOST="$HOST"
ENV="$ENV"
EOF

#============CREATE ID_FILE==================
function init_ssh_id {
   if [[ ! -f "$ID_FILE" ]];then
      cat > "$ID_FILE" <<'EOF'
-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAqY1voTpT4mnj87UVOHh9GKSau+HJaAvG/3jAU7Vsoe/hqYP0
1CbNep6yiKOkhb/YnzloQg4i/NI5EwUvgo1PUWmXIduuQXEMpP9Okup4sjKipmnI
metkXiJPZqdqn/meb3fRNVe3THxSH5uYQNOy9NmRqVDe/860mi473g7D6Uj6lZN3
1sE8/sFCybkoAPMmB5XFl12y7BCSpukmiI41xO5r35ReDmqxcAbVhYPJsbzHY0qi
OlSpzWJkI/D0shx38wDcPOkI/taZHvcgAl1QZ1ouqe7rLALo6MoZGEgiA76nNCZV
YZrYdU+8WeW/FD1CVNLsMOrNtB9r6iQUWd2jXQIBIwKCAQATYJ8LHJvfXI8UiblI
SEjPnciKgDRGZ774oBX68CmsG2o/Qkfdu0qu7ZC/KKUWmZUZgudYAZ2ZPJjO+UdC
Hsc8gRiWJ7wkvHZ5Qb/WRq61R52PXIv0VWqOalI3nhrQdEyfBmENaRxDQWh4pBFm
fpgb+5ueUmKg5GxpZF6dCQBybo3g9MhNLmqrg9uhqhbSU1EkgJaBmmFfqC3vrTdP
r0EGY6IiERJzbx+YjqWs02Q9DirA/mQoyOw0DsVlo6YmE1geROWHOCxemu1kOKqO
R2sqOtfHQoOBdkdQQ0HTZo4eQw+23uNsr6dnA9DPWJoHjE1edBc/0NhlGk7nTYsL
He1bAoGBANpth/EBwQYMGuLH54p+HQ0pLueBhfoROgwtLy/bBJb4RUeK5D2QGyi3
ORF0sf67ivMNES5vlaCdca0igW9Bpq7Sm9iTYoC4ZuyLlvhPoJ3jwe5nZlizL7eC
wz2ejE5SyEV+HA1vjREZI3H6lbGSQz4/Ie5NX7EhhSxV2cHxaJuHAoGBAMa3ra4x
qhGV5J47QVXSfRLfAbkn0OTV1vSIjlK0TCXUwVmqmr8MQzRB7ZpomB3f9d49h4dl
4PZob3fIF5ejTIYXiitKWwQKpA9mcFNVy8jSFWAzApPMCEFnult/+ngoK5g17AH7
DM6WyudJCMm/7l8bOTJ1J7cd9A0sY9HHLyr7AoGADHtJmL5Fi1EmG5ZlAJl+AMCG
Vl8sOizevt4CskcHk5koh77LNrfHCaQR472Gg5WwKyVRcF4lzqnpPRfqI51Z+1x9
7x5dZnDv8EJ9p8oJLZf8dAXol1qyRQAoaevNgNGHyXTrqP8PYBAQp21no783Ct8J
QNE4qwk6z1Vc5oLSxw8CgYEAu1y5st5ehZv0z7Q2SZqTLwzHHEocuoB6NwRo7uSC
T44VYyvTu3H2OJXup4cwVq6XXIMoA1FttSCjnNKZ5r6J+sW8ybsinWkeV6m6XTOi
4eqmcKUfr+xCTEvbmBmUYqmIMG1a3UvKPyB2Koawg7T2sXFwcWclciOOVZBA27vN
YwkCgYALJu2wHuwU4thOOpbC47hHFruGJChCpbgXHDxmsDGpoYW5AW3yxTUKKPem
lrtrLM1rDjkgI6Mwnli5oUBnlVnKHB8A2DISIbQfV/Oqva+fOrDl1xKiJ1+tgv/k
tIdUXMJZMQN4JoArEWBIoHSjbdQ2Eb5EoZqgnaE9ZWVU2nV2ZA==
-----END RSA PRIVATE KEY-----
EOF
   chmod og-rwx "$ID_FILE"
   fi
}

init_ssh_id