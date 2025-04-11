import { CompositeZIndex, FixedZIndex } from "gestalt";

const HEADER_ZINDEX = new FixedZIndex(10);
const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

export { HEADER_ZINDEX, zIndex };
