// Process the uml option.
function processUmlOptions (uml_options) {
  if ('render_option' in uml_options) {
    if (uml_options['render_option'] == "inline-svg"){
      console.log("ycyi render: ", uml_options['render']);
      uml_options['render'] = function (tokens, idx, options, env, slf) { var fetch = require("sync-fetch"); var token = tokens[idx]; var raw = fetch(token.attrs[token.attrIndex("src")][1]); return raw.text().replace(/\r\n/g, "\n") + "\n"; }
    }
  }
  return uml_options;
}

// Process the mkdp_preview_options set by user in vim.
const processOptions = (options = {}) => {
  // uml options
  options.uml = processUmlOptions(options.uml);
  return options;
}

export default processOptions;
