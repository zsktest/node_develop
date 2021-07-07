exports.HandleCookie = {
  getCookie: (key)=>{
    let name = key + "=";
    if(typeof(document)!='undefined') {
      let ca = document.cookie.split(';');
      for(let i=0; i<ca.length; i++) 
      {
        let c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    } else {
      console.log('无法获取cookie')
    }
  },

  setCookie: (cname,cvalue,exdays)=>{
    if(!exdays) exdays=1
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    if(typeof(document)!='undefined') {
      document.cookie = cname + "=" + cvalue + "; " + expires;
    } else {
      console.log('无法设置cookie');
    }
  }
}