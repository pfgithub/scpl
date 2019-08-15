import { ConvertingContext } from "../Converter";
import { Parse, AsAble, AsFilterItem } from "../ParserData";
import {
	isAggrandizementPropertyName,
	AggrandizementPropertyName
} from "../WFTypes/Types";
import { Text, ContentItemFilter } from "../OutputData";
import { Position } from "../Production";
import { genShortName } from "../ActionData";
import { isComparisonMethod, ComparisonName } from "../Data/GetTypes";

export class FilterItemParse extends Parse implements AsFilterItem {
	property: AsAble;
	operator: AsAble;
	value: AsAble;
	units?: AsAble;
	constructor(
		start: Position,
		end: Position,
		property: AsAble,
		operator: AsAble,
		value: AsAble,
		units?: AsAble
	) {
		// property: string, oiperatornl/ ;''
		super(start, end);
		this.property = property;
		this.operator = operator;
		this.value = value;
		this.units = units;
	}
	canBeFilterItem(_cc: ConvertingContext): true {
		return true;
	}
	asFilterItem(cc: ConvertingContext, filter: ContentItemFilter): void {
		if (!this.property.canBeString(cc)) {
			throw this.property.error(cc, "Property must be a string");
		}
		const property = genShortName(this.property.asString(cc));
		if (!isAggrandizementPropertyName(property)) {
			throw this.property.error(cc, "Property must be a property name.");
		}
		const propertyName: AggrandizementPropertyName = property;

		if (!this.operator.canBeString(cc)) {
			throw this.property.error(cc, "Operator must be a string");
		}
		const operator = genShortName(this.operator.asString(cc));
		if (!isComparisonMethod(operator)) {
			throw this.property.error(
				cc,
				"Property must be a comparison method."
			);
		}
		const operatorName: ComparisonName = operator;

		const typeInfo = filter.getTypeInfo({
			property: propertyName,
			operator: operatorName
		});
		if (typeInfo.error) {
			throw this.error(cc, typeInfo.message);
		}
		let value: Text | string | number | boolean | undefined;
		if (typeInfo.expectedType === "stringOrText") {
			if (!this.value.canBeText(cc)) {
				throw this.property.error(cc, "Value must be a string");
			}
			value = this.value.asText(cc);
		} else if (typeInfo.expectedType === "string") {
			if (!this.value.canBeString(cc)) {
				throw this.property.error(cc, "Value must be a string");
			}
			value = this.value.asString(cc);
		} else if (typeInfo.expectedType === "number") {
			if (!this.value.canBeNumber(cc)) {
				throw this.property.error(cc, "Value must be a number");
			}
			value = this.value.asNumber(cc);
		} else if (typeInfo.expectedType === "boolean") {
			if (!this.value.canBeBoolean(cc)) {
				throw this.property.error(cc, "Value must be a boolean");
			}
			value = this.value.asBoolean(cc);
		}

		if (value === undefined) {
			throw this.error(cc, "Value is unknown. This should never happen.");
		}

		if (this.units) {
			throw this.units.error(cc, "Units are not implemented yet");
		}

		const addResult = filter.add(value, typeInfo.typeData);
		if (typeof addResult === "string") {
			throw this.error(cc, addResult);
		}
	}
}
