JS.Test = new JS.Module('Test', {
  extend: {
    asyncTimeout: 10,

    filter: function(objects, suffix) {
      return JS.Test.Runner.filter(objects, suffix);
    },

    Reporters: new JS.Module({
      extend: {
        METHODS: ['startSuite', 'startContext', 'startTest',
                  'update', 'addFault',
                  'endTest', 'endContext', 'endSuite'],

        _registry: {},

        register: function(name, klass) {
          this._registry[name] = klass;
        },

        find: function(name) {
          if (!name) return null;
          return this._registry[name] || null;
        }
      }
    }),

    UI:   new JS.Module({}),
    Unit: new JS.Module({}),
  }
});
