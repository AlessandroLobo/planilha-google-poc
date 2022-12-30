const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./credentials.json");

const doc = new GoogleSpreadsheet(
  "1clQ6pBZhoxR-yDYgaU2AFMMiDxoKwBsbaSC7voUE5pU"
);

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    console.log(doc.title);
  } catch (err) {}
};
run();
