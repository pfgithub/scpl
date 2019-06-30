import { Position } from "./Production";
export { Position } from "./Production";

export class PositionedError extends Error {
	// an error at a position
	start: Position;
	end: Position;
	constructor(message: string, start: Position, end: Position) {
		super(
			`Error from ${start.toString()} to ${end.toString()}: ${message}`
		);
		this.start = start;
		this.end = end;
	}
}
