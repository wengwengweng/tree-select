webpackJsonp([1],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_tree_select_assets_index_less__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_tree_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rc_tree_select_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_less__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__demo_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_dialog_assets_index_css__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_dialog_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rc_dialog_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_dialog__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(47);





/* eslint react/no-multi-comp:0, no-console:0, no-alert: 0 */










function isLeaf(value) {
  if (!value) {
    return false;
  }
  var queues = [].concat(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */]));
  while (queues.length) {
    // BFS
    var item = queues.shift();
    if (item.value === value) {
      if (!item.children) {
        return true;
      }
      return false;
    }
    if (item.children) {
      queues = queues.concat(item.children);
    }
  }
  return false;
}

function findPath(value, data) {
  var sel = [];
  function loop(selected, children) {
    for (var i = 0; i < children.length; i++) {
      var item = children[i];
      if (selected === item.value) {
        sel.push(item);
        return;
      }
      if (item.children) {
        loop(selected, item.children, item);
        if (sel.length) {
          sel.push(item);
          return;
        }
      }
    }
  }
  loop(value, data);
  return sel;
}

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _ref,
        _arguments = arguments;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tsOpen: false,
      visible: false,
      inputValue: '0-0-0-label',
      value: '0-0-0-value1',
      // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],
      lv: { value: '0-0-0-value', label: 'spe label' },
      multipleValue: [],
      simpleTreeData: [{ key: 1, pId: 0, label: 'test1', value: 'test1' }, { key: 121, pId: 0, label: 'test1', value: 'test121' }, { key: 11, pId: 1, label: 'test11', value: 'test11' }, { key: 12, pId: 1, label: 'test12', value: 'test12' }, { key: 111, pId: 11, label: 'test111', value: 'test111' }],
      treeDataSimpleMode: {
        id: 'key',
        rootPId: 0
      }
    }, _this.onClick = function () {
      _this.setState({
        visible: true
      });
    }, _this.onClose = function () {
      _this.setState({
        visible: false
      });
    }, _this.onSearch = function (value) {
      console.log(value, _arguments);
    }, _this.onChange = function (value) {
      console.log('onChange', _arguments);
      _this.setState({ value: value });
    }, _this.onChangeChildren = function (value) {
      console.log('onChangeChildren', _arguments);
      var pre = value ? _this.state.value : undefined;
      _this.setState({ value: isLeaf(value) ? value : pre });
    }, _this.onChangeLV = function (value) {
      console.log('labelInValue', _arguments);
      if (!value) {
        _this.setState({ lv: undefined });
        return;
      }
      var path = findPath(value.value, __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */]).map(function (i) {
        return i.label;
      }).reverse().join(' > ');
      _this.setState({ lv: { value: value.value, label: path } });
    }, _this.onMultipleChange = function (value) {
      console.log('onMultipleChange', _arguments);
      _this.setState({ multipleValue: value });
    }, _this.onSelect = function () {
      // use onChange instead
      console.log(_arguments);
    }, _this.onDropdownVisibleChange = function (visible, info) {
      console.log(visible, _this.state.value, info);
      if (Array.isArray(_this.state.value) && _this.state.value.length > 1 && _this.state.value.length < 3) {
        alert('please select more than two item or less than one item.');
        return false;
      }
      return true;
    }, _this.filterTreeNode = function (input, child) {
      return String(child.props.title).indexOf(input) === 0;
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(this.refs.mul.getInputDOMNode());
      this.refs.mul.getInputDOMNode().setAttribute('disabled', true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _arguments2 = arguments,
          _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'tree-select in dialog'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'button',
          { className: 'btn btn-primary', onClick: this.onClick },
          'show dialog'
        ),
        this.state.visible ? __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_rc_dialog___default.a,
          {
            visible: this.state.visible,
            animation: 'zoom',
            maskAnimation: 'fade',
            onClose: this.onClose,
            style: { width: 600, height: 400, overflow: 'auto' },
            id: 'area'
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { style: { height: 600, paddingTop: 100 } },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
              getPopupContainer: function getPopupContainer(triggerNode) {
                return triggerNode.parentNode;
              },
              style: { width: 300 },
              transitionName: 'rc-tree-select-dropdown-slide-up',
              choiceTransitionName: 'rc-tree-select-selection__choice-zoom',
              dropdownStyle: { maxHeight: 200, overflow: 'auto', zIndex: 1500 },
              placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'i',
                null,
                '\u8BF7\u4E0B\u62C9\u9009\u62E9'
              ),
              searchPlaceholder: 'please search',
              showSearch: true, allowClear: true, treeLine: true,
              value: this.state.value,
              treeData: __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */],
              treeNodeFilterProp: 'label',
              filterTreeNode: false,
              onSearch: this.onSearch,
              onChange: this.onChange,
              onSelect: this.onSelect
            })
          )
        ) : null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'single select'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
          style: { width: 300 },
          transitionName: 'rc-tree-select-dropdown-slide-up',
          choiceTransitionName: 'rc-tree-select-selection__choice-zoom',
          dropdownStyle: { maxHeight: 200, overflow: 'auto' },
          placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'i',
            null,
            '\u8BF7\u4E0B\u62C9\u9009\u62E9'
          ),
          searchPlaceholder: 'please search',
          showSearch: true, allowClear: true, treeLine: true,
          inputValue: this.state.inputValue,
          value: this.state.value,
          treeData: __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */],
          treeNodeFilterProp: 'label',
          filterTreeNode: false,
          onSearch: this.onSearch,
          open: this.state.tsOpen,
          onChange: function onChange(value) {
            console.log('onChange', _arguments2);
            if (value === '0-0-0-0-value') {
              _this2.setState({ tsOpen: true });
            } else {
              _this2.setState({ tsOpen: false });
            }
            _this2.setState({ value: value });
          },
          onDropdownVisibleChange: function onDropdownVisibleChange(v, info) {
            console.log('single onDropdownVisibleChange', v, info);
            // document clicked
            if (info.documentClickClose && _this2.state.value === '0-0-0-0-value') {
              return false;
            }
            return true;
          },
          onSelect: this.onSelect
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'single select (just select children)'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
          style: { width: 300 },
          transitionName: 'rc-tree-select-dropdown-slide-up',
          choiceTransitionName: 'rc-tree-select-selection__choice-zoom',
          dropdownStyle: { maxHeight: 200, overflow: 'auto' },
          placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'i',
            null,
            '\u8BF7\u4E0B\u62C9\u9009\u62E9'
          ),
          searchPlaceholder: 'please search',
          showSearch: true, allowClear: true, treeLine: true,
          value: this.state.value,
          treeData: __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */],
          treeNodeFilterProp: 'label',
          filterTreeNode: false,
          onChange: this.onChangeChildren
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'multiple select'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], { ref: 'mul',
          style: { width: 300 },
          transitionName: 'rc-tree-select-dropdown-slide-up',
          choiceTransitionName: 'rc-tree-select-selection__choice-zoom',
          dropdownStyle: { maxHeight: 200, overflow: 'auto' },
          placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'i',
            null,
            '\u8BF7\u4E0B\u62C9\u9009\u62E9'
          ),
          searchPlaceholder: 'please search',
          multiple: true,
          value: this.state.multipleValue,
          treeData: __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */],
          treeNodeFilterProp: 'title',
          onChange: this.onMultipleChange,
          onSelect: this.onSelect
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'check select'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
          className: 'check-select',
          transitionName: 'rc-tree-select-dropdown-slide-up',
          choiceTransitionName: 'rc-tree-select-selection__choice-zoom',
          dropdownStyle: { height: 200, overflow: 'auto' },
          dropdownPopupAlign: { overflow: { adjustY: 0, adjustX: 0 }, offset: [0, 2] },
          onDropdownVisibleChange: this.onDropdownVisibleChange,
          placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'i',
            null,
            '\u8BF7\u4E0B\u62C9\u9009\u62E9'
          ),
          searchPlaceholder: 'please search',
          treeLine: true, maxTagTextLength: 10,
          value: this.state.value,
          inputValue: null,
          treeData: __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */],
          treeNodeFilterProp: 'title',
          treeCheckable: true, showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["SHOW_PARENT"],
          onChange: this.onChange,
          onSelect: this.onSelect
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'labelInValue & show path'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
          style: { width: 500 },
          transitionName: 'rc-tree-select-dropdown-slide-up',
          choiceTransitionName: 'rc-tree-select-selection__choice-zoom',
          dropdownStyle: { maxHeight: 200, overflow: 'auto' },
          placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'i',
            null,
            '\u8BF7\u4E0B\u62C9\u9009\u62E9'
          ),
          searchPlaceholder: 'please search',
          showSearch: true, allowClear: true, treeLine: true,
          value: this.state.lv, labelInValue: true,
          treeData: __WEBPACK_IMPORTED_MODULE_12__util__["a" /* gData */],
          treeNodeFilterProp: 'label',
          filterTreeNode: false,
          onChange: this.onChangeLV
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'use treeDataSimpleMode'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
          style: { width: 300 },
          dropdownStyle: { maxHeight: 200, overflow: 'auto' },
          placeholder: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'i',
            null,
            '\u8BF7\u4E0B\u62C9\u9009\u62E9'
          ),
          searchPlaceholder: 'please search',
          treeLine: true, maxTagTextLength: 10,
          inputValue: 'test111',
          value: this.state.value,
          treeData: this.state.simpleTreeData,
          treeNodeFilterProp: 'title',
          treeDataSimpleMode: this.state.treeDataSimpleMode,
          treeCheckable: true, showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["SHOW_PARENT"],
          onChange: this.onChange,
          onSelect: this.onSelect
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'Testing in extreme conditions (Boundary conditions test) '
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */], {
          style: { width: 200 },
          dropdownStyle: { maxHeight: 200, overflow: 'auto' },
          defaultValue: 'leaf1', multiple: true, treeCheckable: true, showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["SHOW_PARENT"],
          treeDefaultExpandAll: true,
          treeData: [{ key: '', value: '', label: 'empty value', children: [] }, {
            key: '0', value: '0', label: '0 label', children: [{ key: '00', value: '00', label: '00 label', children: [] }, { key: '01', value: '01', label: '01 label', children: [] }]
          }],
          onChange: function onChange(val) {
            return console.log(val, _arguments2);
          }
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'h2',
          null,
          'use TreeNode Component (not recommend)'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["a" /* default */],
          {
            style: { width: 200 },
            dropdownStyle: { maxHeight: 200, overflow: 'auto' },
            defaultValue: 'leaf1',
            treeDefaultExpandAll: true,
            treeNodeFilterProp: 'title',
            filterTreeNode: this.filterTreeNode,
            onChange: function onChange(val) {
              return console.log(val, _arguments2);
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"],
            { value: '', title: 'parent 1', key: '' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"],
              { value: 'parent 1-0', title: 'parent 1-0', key: '0-1-0' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"], { value: 'leaf1', title: 'my leaf', key: 'random' }),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"], { value: 'leaf2', title: 'your leaf', key: 'random1', disabled: true })
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"],
              { value: 'parent 1-1', title: 'parent 1-1', key: '0-1-1' },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"], { value: 'sss',
                title: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'span',
                  { style: { color: 'red' } },
                  'sss'
                ), key: 'random3'
              }),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"],
                { value: 'same value1', title: 'same txtle', key: '0-1-1-1' },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"], { value: 'same value10', title: 'same titlexd', key: '0-1-1-1-0' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"],
            { value: 'same value2', title: 'same title', key: '0-2' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"], { value: '2same value', title: '2same title', key: '0-2-0' })
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_rc_tree_select__["TreeNode"], { value: 'same value3', title: 'same title', key: '0-3' })
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(14);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _KeyCode = __webpack_require__(43);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _rcAnimate = __webpack_require__(42);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _LazyRenderBox = __webpack_require__(293);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

var _getScrollBarSize = __webpack_require__(325);

var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function noop() {}
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    (0, _inherits3["default"])(Dialog, _React$Component);

    function Dialog() {
        (0, _classCallCheck3["default"])(this, Dialog);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            // need demo?
            // https://github.com/react-component/dialog/pull/28
            if (_this.refs.wrap) {
                _this.refs.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            _this.props.afterClose();
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === _KeyCode2["default"].ESC) {
                _this.close(e);
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === _KeyCode2["default"].TAB) {
                    var activeElement = document.activeElement;
                    var dialogRoot = _this.refs.wrap;
                    var sentinel = _this.refs.sentinel;
                    if (e.shiftKey) {
                        if (activeElement === dialogRoot) {
                            sentinel.focus();
                        }
                    } else if (activeElement === _this.refs.sentinel) {
                        dialogRoot.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = _react2["default"].createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = _react2["default"].createElement("div", { className: prefixCls + '-header', ref: "header" }, _react2["default"].createElement("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = _react2["default"].createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react2["default"].createElement("span", { className: prefixCls + '-close-x' }));
            }
            var style = (0, _objectAssign2["default"])({}, props.style, dest);
            var transitionName = _this.getTransitionName();
            var dialogElement = _react2["default"].createElement(_LazyRenderBox2["default"], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react2["default"].createElement("div", { className: prefixCls + '-content' }, closer, header, _react2["default"].createElement("div", __assign({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), _react2["default"].createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
            return _react2["default"].createElement(_rcAnimate2["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return (0, _objectAssign2["default"])({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return (0, _objectAssign2["default"])({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], __assign({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = _react2["default"].createElement(_rcAnimate2["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getElement = function (part) {
            return _this.refs[part];
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            _this.props.onClose(e);
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = (0, _getScrollBarSize2["default"])();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.refs.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.refs.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.refs.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.refs.wrap) {
                _this.refs.wrap.style.paddingLeft = _this.refs.wrap.style.paddingLeft = '';
            }
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.lastOutSideFocusNode = document.activeElement;
                this.addScrollingEffect();
                this.refs.wrap.focus();
                var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return _react2["default"].createElement("div", null, this.getMaskElement(), _react2["default"].createElement("div", __assign({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(_react2["default"].Component);

exports["default"] = Dialog;

Dialog.defaultProps = {
    afterClose: noop,
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    prefixCls: 'rc-dialog',
    onClose: noop
};
module.exports = exports['default'];

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(17);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _Dialog = __webpack_require__(291);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _getContainerRenderMixin = __webpack_require__(143);

var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var DialogWrap = (0, _createReactClass2["default"])({
    displayName: 'DialogWrap',
    mixins: [(0, _getContainerRenderMixin2["default"])({
        isVisible: function isVisible(instance) {
            return instance.props.visible;
        },

        autoDestroy: false,
        getComponent: function getComponent(instance, extra) {
            return _react2["default"].createElement(_Dialog2["default"], __assign({}, instance.props, extra, { key: "dialog" }));
        },
        getContainer: function getContainer(instance) {
            if (instance.props.getContainer) {
                return instance.props.getContainer();
            }
            var container = document.createElement('div');
            document.body.appendChild(container);
            return container;
        }
    })],
    getDefaultProps: function getDefaultProps() {
        return {
            visible: false
        };
    },
    shouldComponentUpdate: function shouldComponentUpdate(_ref) {
        var visible = _ref.visible;

        return !!(this.props.visible || visible);
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    },
    getElement: function getElement(part) {
        return this._component.getElement(part);
    },
    render: function render() {
        return null;
    }
});
exports["default"] = DialogWrap;
module.exports = exports['default'];

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(14);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var LazyRenderBox = function (_React$Component) {
    (0, _inherits3["default"])(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        (0, _classCallCheck3["default"])(this, LazyRenderBox);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += ' ' + this.props.hiddenClassName;
        }
        var props = (0, _objectAssign2["default"])({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return _react2["default"].createElement("div", __assign({}, props));
    };

    return LazyRenderBox;
}(_react2["default"].Component);

exports["default"] = LazyRenderBox;
module.exports = exports['default'];

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getScrollBarSize;
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}
module.exports = exports['default'];

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[410]);
//# sourceMappingURL=basic.js.map