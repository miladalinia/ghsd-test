export declare const StyledContainer: import("styled-components").IStyledComponent<"web", {
    type?: "success" | "info" | "warning" | "error" | undefined;
    closable?: boolean | ({
        closeIcon?: React.ReactNode;
        disabled?: boolean;
    } & import("react").AriaAttributes) | undefined;
    closeText?: import("react").ReactNode;
    message?: import("react").ReactNode;
    description?: import("react").ReactNode;
    onClose?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    afterClose?: (() => void) | undefined;
    showIcon?: boolean | undefined;
    role?: string | undefined;
    style?: React.CSSProperties | undefined;
    prefixCls?: string | undefined;
    className?: string | undefined;
    rootClassName?: string | undefined;
    banner?: boolean | undefined;
    icon?: import("react").ReactNode;
    closeIcon?: import("react").ReactNode;
    action?: import("react").ReactNode;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    id?: string | undefined;
}> & ((props: import("../alert/alert").AlertProps) => import("react/jsx-runtime").JSX.Element);
export declare const ToggleButton: import("styled-components").IStyledComponent<"web", {
    ref?: import("react").Ref<HTMLButtonElement> | undefined;
    key?: import("react").Key | null | undefined;
    disabled?: boolean | undefined | undefined;
    form?: string | undefined | undefined;
    formAction?: string | ((formData: FormData) => void | Promise<void>) | undefined;
    formEncType?: string | undefined | undefined;
    formMethod?: string | undefined | undefined;
    formNoValidate?: boolean | undefined | undefined;
    formTarget?: string | undefined | undefined;
    name?: string | undefined | undefined;
    type?: "submit" | "reset" | "button" | undefined | undefined;
    value?: string | number | readonly string[] | undefined;
    defaultChecked?: boolean | undefined | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined | undefined;
    suppressHydrationWarning?: boolean | undefined | undefined;
    accessKey?: string | undefined | undefined;
    autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
    autoFocus?: boolean | undefined | undefined;
    className?: string | undefined | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | "plaintext-only" | undefined;
    contextMenu?: string | undefined | undefined;
    dir?: string | undefined | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
    hidden?: boolean | undefined | undefined;
    id?: string | undefined | undefined;
    lang?: string | undefined | undefined;
    nonce?: string | undefined | undefined;
    slot?: string | undefined | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: import("react").CSSProperties | undefined;
    tabIndex?: number | undefined | undefined;
    title?: string | undefined | undefined;
    translate?: "yes" | "no" | undefined | undefined;
    radioGroup?: string | undefined | undefined;
    role?: import("react").AriaRole | undefined;
    about?: string | undefined | undefined;
    content?: string | undefined | undefined;
    datatype?: string | undefined | undefined;
    inlist?: any;
    prefix?: string | undefined | undefined;
    property?: string | undefined | undefined;
    rel?: string | undefined | undefined;
    resource?: string | undefined | undefined;
    rev?: string | undefined | undefined;
    typeof?: string | undefined | undefined;
    vocab?: string | undefined | undefined;
    autoCorrect?: string | undefined | undefined;
    autoSave?: string | undefined | undefined;
    color?: string | undefined | undefined;
    itemProp?: string | undefined | undefined;
    itemScope?: boolean | undefined | undefined;
    itemType?: string | undefined | undefined;
    itemID?: string | undefined | undefined;
    itemRef?: string | undefined | undefined;
    results?: number | undefined | undefined;
    security?: string | undefined | undefined;
    unselectable?: "on" | "off" | undefined | undefined;
    popover?: "" | "auto" | "manual" | undefined | undefined;
    popoverTargetAction?: "toggle" | "show" | "hide" | undefined | undefined;
    popoverTarget?: string | undefined | undefined;
    inert?: boolean | undefined | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
    is?: string | undefined | undefined;
    exportparts?: string | undefined | undefined;
    part?: string | undefined | undefined;
    children?: import("react").ReactNode | Iterable<import("react").ReactNode>;
    "aria-activedescendant"?: string | undefined | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
    "aria-braillelabel"?: string | undefined | undefined;
    "aria-brailleroledescription"?: string | undefined | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
    "aria-colcount"?: number | undefined | undefined;
    "aria-colindex"?: number | undefined | undefined;
    "aria-colindextext"?: string | undefined | undefined;
    "aria-colspan"?: number | undefined | undefined;
    "aria-controls"?: string | undefined | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
    "aria-describedby"?: string | undefined | undefined;
    "aria-description"?: string | undefined | undefined;
    "aria-details"?: string | undefined | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
    "aria-errormessage"?: string | undefined | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
    "aria-keyshortcuts"?: string | undefined | undefined;
    "aria-label"?: string | undefined | undefined;
    "aria-labelledby"?: string | undefined | undefined;
    "aria-level"?: number | undefined | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
    "aria-owns"?: string | undefined | undefined;
    "aria-placeholder"?: string | undefined | undefined;
    "aria-posinset"?: number | undefined | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined | undefined;
    "aria-rowcount"?: number | undefined | undefined;
    "aria-rowindex"?: number | undefined | undefined;
    "aria-rowindextext"?: string | undefined | undefined;
    "aria-rowspan"?: number | undefined | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
    "aria-valuemax"?: number | undefined | undefined;
    "aria-valuemin"?: number | undefined | undefined;
    "aria-valuenow"?: number | undefined | undefined;
    "aria-valuetext"?: string | undefined | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: import("react").InputEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onScrollEnd?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onScrollEndCapture?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onToggle?: import("react").ToggleEventHandler<HTMLButtonElement> | undefined;
    onBeforeToggle?: import("react").ToggleEventHandler<HTMLButtonElement> | undefined;
    onTransitionCancel?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionCancelCapture?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionRun?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionRunCapture?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionStart?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionStartCapture?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
}>;
//# sourceMappingURL=message-box.style.d.ts.map