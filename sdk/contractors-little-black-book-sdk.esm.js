export function create({ orgId } = {}) {
  const version = "0.0.1";

  function assess({ notes = "" } = {}) {
    const text = String(notes).toLowerCase();
    const flags = [];

    if (text.includes("deposit") && (text.includes("before") || text.includes("no"))) {
      flags.push({ key: "payment-risk", level: "high", reason: "Deposit resistance / pre-work pressure." });
    }
    if (text.includes("rush") || text.includes("asap") || text.includes("today")) {
      flags.push({ key: "rush-pressure", level: "med", reason: "Timeline pressure present." });
    }
    if (text.includes("change order") || text.includes("scope")) {
      flags.push({ key: "scope-risk", level: "med", reason: "Scope / change order language detected." });
    }

    return {
      orgId: orgId || "unknown",
      flags,
      summary: flags.length ? "Review boundary + documentation steps." : "No obvious risk flags detected.",
    };
  }

  return { version, assess };
}
