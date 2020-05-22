export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // Уведомляем слушателй если они есть
    emit(event, ...args) {
        if (!Array.isArray((this.listeners[event]))) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // Подписываемся на уведомления
    // Добавляем нового слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

/* const emitter = new Emitter();

emitter.subscribe('den', data => console.log('Den', data))

emitter.emit('den', [43, 'hello', 'den'])*/
