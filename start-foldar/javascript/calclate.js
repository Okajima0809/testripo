    const val1Input = document.getElementById("value1");
    const val2Input = document.getElementById("value2");
    const operatorSelect = document.getElementById("choice");
    const formulaArea = document.getElementById("formula");
    const resultArea = document.getElementById("result");

    // 値の変更があったら計算を実行
    val1Input.addEventListener("input", calculate);
    val2Input.addEventListener("input", calculate);
    operatorSelect.addEventListener("change", calculate);

    function calculate() {
      const val1 = parseFloat(val1Input.value);
      const val2 = parseFloat(val2Input.value);
      const operator = operatorSelect.value;

      // 入力チェック
      if (isNaN(val1) || isNaN(val2)) {
        formulaArea.textContent = "計算式：";
        resultArea.textContent = "計算結果：両方の値を入力してください";
        return;
      }

      let result;
      let symbol;

      // 演算処理
      if (operator === "addition") {
        result = val1 + val2;
        symbol = "+";
      } else if (operator === "subtraction") {
        result = val1 - val2;
        symbol = "-";
      } else if (operator === "multiplication") {
        result = val1 * val2;
        symbol = "×";
      } else if (operator === "division") {
        if (val2 === 0) {
          formulaArea.textContent = "計算式：";
          resultArea.textContent = "計算結果：0では割り算できません";
          return;
        }
        result = val1 / val2;
        symbol = "÷";
      }

      // 結果の表示
      formulaArea.textContent = `計算式：${val1} ${symbol} ${val2}`;
      resultArea.textContent = `計算結果：${result}`;
    }