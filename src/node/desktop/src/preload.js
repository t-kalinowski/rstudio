/*
 * preload.js
 *
 * Copyright (C) 2021 by RStudio, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */
const { contextBridge } = require('electron');

/**
 * The preload script is run in the renderer before our GWT code and enables
 * setting up a bridge between the main process and the renderer process via
 * the contextBridge mechanism.
 * 
 * Code in here has access to powerful node.js and Electron APIs even though
 * the renderer itself is configured with node disabled and context isolation.
 * 
 * Be careful to only expose the exact APIs desired; DO NOT expose general-purpose
 * IPC objects, etc.
 */

contextBridge.exposeInMainWorld('desktop',  {
  proportionalFont: () => "",
  fixedWidthFont: () => "",
  browseUrl: (url) => {},

  getOpenFileName: (caption, label, dir, filter, canChooseDirectories, focusOwner, callback) => {
    callback('');
  },

  getSaveFileName: (caption, label, dir, defaultExtension, forceDefaultExtension, focusOwner, callback) => {
    callback('');
  },

  getExistingDirectory: (caption, label, dir, focusOwner, callback) => {
    callback('');
  },

  onClipboardSelectionChanged: () => {},

  undo: () => {},
  redo: () => {},

  clipboardCut: () => {},
  clipboardCopy: () => {},
  clipboardPaste: () => {},

  setClipboardText: (text) => {},
  getClipboardText: (callback) => { callback(''); },
  getClipboardUris: (callback) => { callback([]); },
  getClipboardImage: (callback) => { callback(''); },

  setGlobalMouseSelection: (selection) => {},
  getGlobalMouseSelection: (callback) => { callback(''); },

  getCursorPosition: (callback) => { callback({x: 20, y: 20}); },
  doesWindowExistAtCursorPosition: (callback) => { callback(false); },

  onWorkbenchInitialized: (scratchPath) => {},
  showFolder: (path) => {},
  showFile: (path) => {},
  showWordDoc: (path) => {},
  showPptPresentation: (path) => {},
  showPDF: (path, pdfPage) => {},
  prepareShowWordDoc: () => {},
  prepareShowPptPresentation: () => {},

  // R version selection currently Win32 only
  getRVersion: (callback) => { callback(''); },
  chooseRVersion: (callback) => { callback(''); },

  devicePixelRatio: () => 1.0,

  openMinimalWindow: (name, url, width, height) => {window.alert('Not implemented'); },
  activateMinimalWindow: (name) => {},
  activateSatelliteWindow: (name) => {},
  prepareForSatelliteWindow: (name, x, y, width, height) => {},
  prepareForNamedWindow: (name, allowExternalNavigate, showToolbar) => {},
  closeNamedWindow: (name) => {},

  copyPageRegionToClipboard: (left, top, width, height) => {},
  exportPageRegionToFile: (targetPath, format, left, top, width, height) => {},

  printText: (text) => {},
  paintPrintText: (printer) => {},
  printFinished: (result) => {},

  supportsClipboardMetafile: (callback) => { callback(false); },

  showMessageBox: (type, caption, message, buttons, defaultButton, cancelButton, callback) => {
    window.alert(message);
    callback(1.0);
  },

  promptForText: (title,
                  caption,
                  defaultValue,
                  type,
                  rememberPasswordPrompt,
                  rememberByDefault,
                  selectionStart,
                  selectionLength,
                  okButtonCaption,
                  callback) => {
                    window.alert('Not implemented');
                    callback('');
                  },

  bringMainFrameToFront: () => {},
  bringMainFrameBehindActive: () => {},

  desktopRenderingEngine: (callback) => { callback(''); },
  setDesktopRenderingEngine: (engine) => {},

  filterText: (text) => text,

  cleanClipboard: (stripHtml) => {},

  setPendingQuit: (pendingQuit) => {},

  openProjectInNewWindow: (projectFilePath) => { window.alert('Not implemented'); },
  openSessionInNewWindow: (workingDirectoryPath) => {},

  openTerminal: (terminalPath, workingDirectory, extraPathEntries, shellType) => {},

  getFixedWidthFontList: () => '',
  getFixedWidthFont: () => '',
  setFixedWidthFont: (font) => '',

  getZoomLevels: () => '',
  getZoomLevel: () => 1.0,
  setZoomLevel: (zoomLevel) => {},
  
  zoomIn: () => {},
  zoomOut: () => {},
  zoomActualSize: () => {},
  
  setBackgroundColor: (rgbColor) => {},
  changeTitleBarColor: (red, green, blue)  => {},
  syncToEditorTheme: (isDark) => {},

  getEnableAccessibility: (callback) => { callback(false); },
  setEnableAccessibility: (enable) => {},

  getClipboardMonitoring: (callback) => { callback(false); },
  setClipboardMonitoring: (monitoring) => {},
  
  getIgnoreGpuBlacklist: () => true,
  setIgnoreGpuBlacklist: (ignore) => {},
  
  getDisableGpuDriverBugWorkarounds: (callback) => { callback(true); },
  setDisableGpuDriverBugWorkarounds: (disable) => {},

  showLicenseDialog: () => {},
  showSessionServerOptionsDialog: () => {},
  getInitMessages: (callback) => { callback(''); },
  getLicenseStatusMessage: (callback) => { callback(''); },
  allowProductUsage: (callback) => { callback(true); },

  getDesktopSynctexViewer: () => '',

  externalSynctexPreview: (pdfPath, page) => {},

  externalSynctexView: (pdfFile,
                        srcFile,
                        line,
                        column) => {},

  supportsFullscreenMode: () => true,
  toggleFullscreenMode: () => {},
  showKeyboardShortcutHelp: () => {},

  launchSession: (reload) => {},

  reloadZoomWindow: () => {},

  setTutorialUrl: (url) => {},
  
  setViewerUrl: (url) => {},
  reloadViewerZoomWindow: (url) => {},

  setShinyDialogUrl: (url) => {},

  getScrollingCompensationType: () => '',

  isMacOS: () => true,
  isCentOS: () => false,

  setBusy: (busy) => {},

  setWindowTitle: (title) => {},

  installRtools: (version, installerPath) => {},

  getDisplayDpi: (callback) => { callback('72'); },

  onSessionQuit: () => '',

  getSessionServer: (callback) => { callback({}); },
  getSessionServers: (callback) => { callback([]); },
  reconnectToSessionServer: (sessionServerJson) => {},

  setLauncherServer: (sessionServerJson, callback) => { callback(false); },
  connectToLauncherServer: () => {},

  getLauncherServer: (callback) => { callback({}); },
  startLauncherJobStatusStream: (jobId) => {},
  stopLauncherJobStatusStream: (jobId) => {},
  startLauncherJobOutputStream: (jobId) => {},
  stopLauncherJobOutputStream: (jobId) => {},
  controlLauncherJob: (jobId, operation) => {},
  submitLauncherJob: (job) => {},
  getJobContainerUser: () => {},
  validateJobsConfig: () => {},
  getProxyPortNumber: (callback) => { callback(-1); },

  signOut: () => {},
});

// RDP-only
//contextBridge.exposeInMainWorld('remoteDesktop', {});

contextBridge.exposeInMainWorld('desktopInfo', {
  chromiumDevtoolsPort: () => { return 0; }
});

contextBridge.exposeInMainWorld('desktopMenuCallback', {
  beginMainMenu: () => {console.log('beginMainMenu')},
  beginMenu: (label) => {},
  addCommand: (cmdId, label, tooltip, shortcut, isChecked) => {},
  addSeparator: () => {},
  endMenu: () => {},
  endMainMenu: () => {console.log('endMainMenu')},
  setCommandVisible: (commandId, visible) => {},
  setCommandEnabled: (commandId, enabled) => {},
  setCommandChecked: (commandId, checked) => {},
  setMainMenuEnabled: (enabled) => {},
  setCommandLabel: (commandId, label) => {},
});
