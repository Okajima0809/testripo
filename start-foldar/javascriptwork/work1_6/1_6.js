function makeCoffee() {

    console.log("☕️スタッフ：先にコーヒーを準備します...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("✅コーヒーが準備できました！");

        resolve();

      }, 2000); // 2秒

    });

  }

  

  function makeSandwich() {

    console.log("🥪スタッフ：先にサンドイッチを準備します...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("✅サンドイッチが準備できました！");

        resolve();

      }, 3000); // 3秒

    });

  }

  

  async function serveCustomer() {

    await Promise.all([makeCoffee(),makeSandwich()]);

    console.log("スタッフ：全てできたので配膳します！");

  }

  

  console.log("お客さんがコーヒーとサンドイッチを注文しました");

  serveCustomer();