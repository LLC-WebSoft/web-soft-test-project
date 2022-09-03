class Example {
  method() {
    return { message: 'Hello from server!' };
  }
}

module.exports = {
  example: {
    schema: {
      method: {
        description: 'Test method for example.',
        public: true,
        params: {
          description: 'Params for test method.',
          required: ['param1'],
          properties: {
            param1: {
              type: 'number',
              description: 'Param1 is number.'
            }
          }
        },
        result: {
          description: 'Value that server must return.',
          type: 'object',
          properties: {
            message: {
              type: 'string'
            }
          }
        }
      }
    },
    Module: Example
  }
};
