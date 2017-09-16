const eventPool = [];

export default class Bus {

    static subscribe(event, callback) {
        for (let i = 0; i < eventPool.length; i++) {
            const item = eventPool[i];
            if (event === item.event) {
                item.callback.push(callback);
                return;
            }
        }
        eventPool.push({
            event: event,
            callback: [callback]
        });
    }

    static send(event, data) {
        eventPool.filter(item => item.event === event)
            .forEach(item => item.callback.forEach(c => c.call(data)));
    }

}