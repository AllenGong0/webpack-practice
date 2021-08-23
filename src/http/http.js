db = function() {
    var store = window.localStorage, doc = document.documentElement;
    if (!store) {
        doc.style.behavior = 'url(#default#userData)';
    }
    return {
        /**
         * 保存数据
         */
        set : function(key, val, context) {
            if (store) {
                return store.setItem(key, val, context);
            } else {
                doc.setAttribute(key, value);
                return doc.save(context || 'default');
            }
        },
        /**
         * 读取数据
         */
        get : function(key, context) {
            if (store) {
                return store.getItem(key, context);
            } else {
                doc.load(context || 'default');
                return doc.getAttribute(key) || '';
            }
        },
        /**
         * 删除数据
         * @param {Object}
         * @param {Object}
         */
        rm : function(key, context) {
            if (store) {
                return store.removeItem(key, context);
            } else {
                context = context || 'default';
                doc.load(context);
                doc.removeAttribute(key);
                return doc.save(context);
            }
        },
        /**
         * 清空数据
         */
        clear : function() {
            if (store) {
                return store.clear();
            } else {
                doc.expires = -1;
            }
        }
    };
}();

//ajax
// if ( typeof window.XMLHttpRequest === "undefined") {
//     window.XMLHttpRequest = function() {
//         return new window.ActiveXObject(navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP");
//     };
// }
ajax = function(uri, options) {
    var httpRequest, httpSuccess, timeout, isTimeout = false, isComplete = false, noop = function() {
    };

    options = {
        method : options.method || "GET",
        data : options.data || null,
        arguments : options.arguments || null,

        onSuccess : options.onSuccess || noop,
        onError : options.onError || noop,
        onComplete : options.onComplete || noop,
        onTimeout : options.onTimeout || noop,
        isAsync : options.isAsync || true,
        timeout : options.timeout ? options.timeout : 30000,
        contentType : options.contentType ? options.contentType : "utf-8",
        type : options.type || "xml"
    };
    uri = uri || "";
    timeout = options.timeout;

    httpRequest = new window.XMLHttpRequest();
    httpRequest.open(options.method, uri, options.isAsync);
    //设置编码集
    httpRequest.setRequestHeader("Content-Type", options.contentType);

    /**
     * @ignore
     */
    httpSuccess = function(r) {
        try {
            return (!r.status && location.protocol == "file:") || (r.status >= 200 && r.status < 300) || (r.status == 304) || (navigator.userAgent.indexOf("Safari") > -1 && typeof r.status == "undefined");
        } catch(e) {
        }
        return false;
    }
    /**
     * @ignore
     */
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4) {
            if (!isTimeout) {
                var o = {};
                o.responseText = httpRequest.responseText;
                o.responseXML = httpRequest.responseXML;
                o.data = options.data;
                o.status = httpRequest.status;
                o.uri = uri;
                o.arguments = options.arguments;

                if (httpSuccess(httpRequest)) {
                    if (options.type === "script") {
                        eval.call(window, data);
                    }
                    options.onSuccess(o);

                } else {
                    options.onError(o);
                }
                options.onComplete(o);
            }
            isComplete = true;
            //删除对象,防止内存溢出
            httpRequest = null;
        }
    };

    httpRequest.send(options.data);

    window.setTimeout(function() {
        var o;
        if (!isComplete) {
            isTimeout = true;
            o = {};
            o.uri = uri;
            o.arguments = options.arguments;
            options.onTimeout(o);
            options.onComplete(o);
        }
    }, timeout);

    return httpRequest;
};

//
var cacheData = {};
cache = function(url, func, cacheTime) {
    //先读内存
    if(cacheData[url]){
        func.call(this, cacheData[url]);
        return;
    }else{
        var me = this,
            chData = db.get(url),
            chTime = db.get(url + "__time"),
            now = new Date().getTime(),
            cacheTime = cacheTime || 60,
            ct = now - 60000 * cacheTime, //默认缓存时间为1个小时
            success = function(data) {
                var res = data.responseText;
                cacheData[url] = res;
                db.set(url, res);
                db.set(url + "__time", now);
                func.call(me, res);
            };
        //存在数据的情况
        if (chData && chTime) {
            //未过期的情况
            if (ct < chTime) {
                func.call(this, chData);
            } else {//过期的情况
                db.rm(url);
                db.rm(url + "__time");
                ajax(url, {'onSuccess' : success});
            }
        } else {
            ajax(url, {'onSuccess' : success});
        }
    }

}

cache(url,function(cacheData){
    var chData=JSON.parse(cacheData);
    console.log(chData);
},360);