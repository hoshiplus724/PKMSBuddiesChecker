// cookie.js
// 選択状況をcookieに保存するための関数群

function saveCookie(query){
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000 * 30)); // 30日後
    const expires = "expires=" + date.toUTCString();
    const savequery = "query=" + query + "; "
    document.cookie = savequery + expires + "; path=/";

}

function loadCookie(){
    const query = getCookie(`query`);
    return query
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}