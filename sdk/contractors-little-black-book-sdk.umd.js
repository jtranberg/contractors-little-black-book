(function (global) {
  function create(opts) {
    opts = opts || {};
    var orgId = opts.orgId || "unknown";
    var version = "0.0.1";

    function assess(input) {
      input = input || {};
      var notes = String(input.notes || "").toLowerCase();
      var flags = [];

      if (notes.indexOf("deposit") !== -1 && (notes.indexOf("before") !== -1 || notes.indexOf("no") !== -1)) {
        flags.push({ key: "payment-risk", level: "high", reason: "Deposit resistance / pre-work pressure." });
      }
      if (notes.indexOf("rush") !== -1 || notes.indexOf("asap") !== -1 || notes.indexOf("today") !== -1) {
        flags.push({ key: "rush-pressure", level: "med", reason: "Timeline pressure present." });
      }
      if (notes.indexOf("change order") !== -1 || notes.indexOf("scope") !== -1) {
        flags.push({ key: "scope-risk", level: "med", reason: "Scope / change order language detected." });
      }

      return {
        orgId: orgId,
        flags: flags,
        summary: flags.length ? "Review boundary + documentation steps." : "No obvious risk flags detected.",
      };
    }

    return { version: version, assess: assess };
  }

  global.ContractorsBlackBookSDK = { create: create };
})(typeof window !== "undefined" ? window : this);
