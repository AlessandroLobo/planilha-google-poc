const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./credentials.json");

const doc = new GoogleSpreadsheet(
  "1clQ6pBZhoxR-yDYgaU2AFMMiDxoKwBsbaSC7voUE5pU"
);

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];

    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: "AlessandroLobo",
      Email: "alessandro.lobo@gmail.com",
      Whatsapp: "16 991844434",
      Cupom: "CupomGanhe",
      Promo: "PromoValido",
    });
  } catch (err) {}
};
run();
