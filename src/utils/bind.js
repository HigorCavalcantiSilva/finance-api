module.exports = function(obj) {
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

    methods.forEach(method => {
      if (method !== 'constructor') {
        obj[method] = obj[method].bind(obj);
      }
    });
  }