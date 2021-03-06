import "./load-polyfill.js";
import "./Tabris.js";
import "./NativeBridge.js";
import "./Layout.js";
import "./Proxy.js";
import "./ProxyCollection.js";
import "./PropertyTypes.js";
import "./Animation.js";
import "./GestureRecognizer.js";
import "./Device.js";
import "./Widget.js";
import "./Crypto.js";
import "./DOMEvents.js";
import "./DOMDocument.js";
import "./WindowTimers.js";
import "./App.js";
import "./UI.js";
import "./ImageData.js";
import "./CanvasContext.js";
import "./LegacyCanvasContext.js";
import "./WebStorage.js";
import "./XMLHttpRequest.js";
import "./widgets/Action.js";
import "./widgets/ActivityIndicator.js";
import "./widgets/Button.js";
import "./widgets/Canvas.js";
import "./widgets/CheckBox.js";
import "./widgets/CollectionView.js";
import "./widgets/Composite.js";
import "./widgets/Drawer.js";
import "./widgets/Drawer-legacy.js";
import "./widgets/ImageView.js";
import "./widgets/Page.js";
import "./widgets/PageSelector.js";
import "./widgets/Picker.js";
import "./widgets/ProgressBar.js";
import "./widgets/RadioButton.js";
import "./widgets/ScrollView.js";
import "./widgets/SearchAction.js";
import "./widgets/Slider.js";
import "./widgets/Switch.js";
import "./widgets/TabFolder.js";
import "./widgets/TabFolder-legacy.js";
import "./widgets/TextInput.js";
import "./widgets/TextView.js";
import "./widgets/ToggleButton.js";
import "./widgets/Video.js";
import "./widgets/WebView.js";

if (typeof module !== "undefined") {
  module.exports = window.tabris;
}

// TODO: Temporary code to keep tests alive

import * as util from "./util";
import * as colors from "./util-colors";
import * as fonts from "./util-fonts";
import * as images from "./util-images";
import Events from "./Events.js";
import Properties from "./Properties.js";

tabris.util = util.extend({}, util, colors, fonts, images);
tabris.Properties = Properties;
tabris.Events = Events;
