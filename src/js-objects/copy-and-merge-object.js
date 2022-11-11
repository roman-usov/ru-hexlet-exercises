// BEGIN (write your solution here)

const make = (/** @type {any} */ name, /** @type {any} */ properties = {}) => ({
  name, state: 'moderating', ...properties, createdAt: Date.now(),
});

export default make;

// END
