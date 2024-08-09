import { reactive } from 'vue';

export const EventBus = reactive({
  events: new Map(),

  on(event, callback) {
 
    if (!this.events.has(event)) {

      this.events.set(event, []);
      
    }
    this.events.get(event).push(callback);
  },

  emit(event, data) {
    if (this.events.has(event)) {
      this.events.get(event).forEach(callback => callback(data));
    }
  },

  off(event, callback) {
    if (this.events.has(event)) {
      const callbacks = this.events.get(event);
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
      if (callbacks.length === 0) {
        this.events.delete(event);
      }
    }
  }
});
