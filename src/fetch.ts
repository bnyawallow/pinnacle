import https from "https";

const url = "https://roofconfig.creativefringe.digital/assets/index-lNimxU7m.js";

https.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    const regex = /https:\/\/[^"'\\]*(facebook|instagram|twitter|tiktok|youtube|linkedin|x\.com)[^"'\\]*/gi;
    const matches = data.match(regex);
    if (matches) {
      console.log([...new Set(matches)]);
    } else {
      console.log("No social links found.");
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
