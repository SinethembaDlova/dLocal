const url = endpoint => {
  const default_endpoint = process.env.REACT_APP_API;
  return default_endpoint || endpoint;
};

export { url };
