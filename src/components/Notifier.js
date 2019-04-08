export default class Notifier {
    constructor(key) {
        this._key = key
        this._observers = []
    }

    addObserver(observer) {
        this._observers.push(observer)
    }

    removeObserver(observer) {
        let idx = this._observers.indexOf(observer)
        if (idx === -1) {
            return
        }
        this._observers.splice(idx, 1)
    }

    notifyObservers(originalValue, newValue) {
        for (let ob of this._observers) {
            try {
                if (ob.constructor === Function) {
                    ob(this._key, originalValue, newValue)
                } else if (ob.accept !== null) {
                    ob.accept(this._key, originalValue, newValue)
                } else {
                    console.error("observer is not a function nor an acceptor")
                }
            } catch (e) {
                console.error("error happened while notifying observers", e)
            }
        }
    }
}
