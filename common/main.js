// 定数の宣言
const sentence = document.getElementById('sentence');
const btn = document.getElementById('DoIt');
const resetBtn = document.getElementById('reset');
const tArea = document.getElementById('textArea');
const num = document.getElementById('num');
const select = document.getElementById('select');

const disableEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
}

// 関数群の配列初期化
let fnArr = [];
let validator = [];

fnArr = {
    text: {
        1 :'この文章はダミーです。全角文字のみで構成されています。漢字、ひらがな、カタカナを使用しています。',
        2 : 'Cloud Dangerous Tall Close Big Victory Morning South Youthful',
        3 : 'このお話しはとってもWONDERFULでかなりcuteなんだ！みんなもセクシーでとびきりの....。'
    },
    clear: ()　=> {
        tArea.value = '';
        num.value = '';
    },
    create: () => {
        let getText = fnArr.text[sentence.value],
            getNum = num.value;
        
        while(getText.length < getNum) {
            getText += getText;
        }
        // 構築された文字列から、指定数の文字列を抽出
        getText = getText.substring(0, getNum);
        tArea.value = getText;
        // テキストエリア内の文章を選択状態にする
        tArea.select();

        // 処理を終了させる
        return false;
    }

}
resetBtn.addEventListener('click', () => {
    fnArr.clear();
});
select.addEventListener('click', () => {
    tArea.select();
    return false;
})
btn.addEventListener('click', () => {
    fnArr.create();
});

// コピペ不可
num.addEventListener('paste', disableEvent);

// 数値以外の値を入力不可にする
num.addEventListener('keypress', (event) => {
    // キーボードのキー自体の値を取得する
    let st = String.fromCharCode(event.which);
    // この書き方ではキーボードのキー自体の値ではなく、キーコードが取得できてしまう
    // let st = event.which;
    // console.log(st);
    if('0123456789'.indexOf(st, 0) < 0) {
        console.log('ここに入力して良いのは数字のみ！');
        // 入力を制限する
        event.preventDefault();
        return false;
    }
});