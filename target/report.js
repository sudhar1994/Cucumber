$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/addcustomer/addcustomer.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "launch and direct to url",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomer.launch_and_direct_to_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the add customer",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomer.click_the_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "enter the details and submit",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "add",
        "pho"
      ]
    },
    {
      "cells": [
        "sudhar",
        "san",
        "adhdv@dh.com",
        "hkfbvsakh",
        "5845845"
      ]
    },
    {
      "cells": [
        "sudhar",
        "san",
        "adhdv@dh.com",
        "hkfbvsakh",
        "5845845"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomer.enter_the_details_and_submit(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "generate a id",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomer.generate_a_id()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "launch and direct to url",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomer.launch_and_direct_to_url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-NMDG9AR\u0027, ip: \u0027192.168.43.202\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60382}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: b44eac098ab73e6b4158cf052c6cbe15\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat addcustomer1.Addcustomer.launch_and_direct_to_url(Addcustomer.java:29)\r\n\tat ✽.launch and direct to url(file:src/test/resources/addcustomer/addcustomer.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click the add customer",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomer.click_the_add_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "customer1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "enter the details and submit",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "add",
        "pho"
      ]
    },
    {
      "cells": [
        "sudhar",
        "san",
        "adhdv@dh.com",
        "hkfbvsakh",
        "5845845"
      ]
    },
    {
      "cells": [
        "sudhar",
        "san",
        "adhdv@dh.com",
        "hkfbvsakh",
        "5845845"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomer.enter_the_details_and_submit(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "generate a id",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomer.generate_a_id()"
});
formatter.result({
  "status": "skipped"
});
});