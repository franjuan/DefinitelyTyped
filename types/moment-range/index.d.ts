// Type definitions for Moment-range.js 3.0.3
// Project: https://github.com/gf3/moment-range
// Definitions by: Bart van den Burg <https://github.com/Burgov>, Wilgert Velinga <https://github.com/wilgert>, Juan Francisco Adame <https://github.com/franjuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';
import {Moment} from 'moment';

export = moment;

declare module 'moment' {
    class DateRange implements Range {
        start: Moment;
        end: Moment;

        constructor(range: string | Date[] | Moment[]);
        constructor(start: Date | Moment, end: Date | Moment);


        contains(other: DateRange | Moment | Date, options?: { exclusive?: boolean }): boolean;

        overlaps(range: DateRange, options?: { adjacent?: boolean }): boolean;

        intersect(other: DateRange, options?: { adjacent?: boolean }): DateRange;

        add(other: DateRange): DateRange;

        subtract(other: DateRange): DateRange[];

        by(interval: moment.unitOfTime.Diff, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        byRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        isSame(other: DateRange): boolean;

        diff(unit?: moment.unitOfTime.Diff, rounded?: boolean): number;

        toDate(): Date[];

        toString(): string;

        valueOf(): number;

        center(): Moment;

        clone(): DateRange;

        isEqual(other: DateRange): boolean;

        adjacent(other: DateRange): boolean;

        duration(unit?: moment.unitOfTime.Diff, precise?: boolean): number;

        reverseBy(interval: moment.unitOfTime.Diff, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        reverseByRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;
    }

    interface Range {
        start: Moment;
        end: Moment;

        contains(other: DateRange | Moment | Date, options?: { exclusive?: boolean }): boolean;

        overlaps(range: DateRange, options?: { adjacent?: boolean }): boolean;

        intersect(other: DateRange, options?: { adjacent?: boolean }): DateRange;

        add(other: DateRange): DateRange;

        subtract(other: DateRange): DateRange[];

        by(interval: moment.unitOfTime.Diff, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        byRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        isSame(other: DateRange): boolean;

        diff(unit?: moment.unitOfTime.Diff, rounded?: boolean): number;

        toDate(): Date[];

        toString(): string;

        valueOf(): number;

        center(): Moment;

        clone(): DateRange;

        isEqual(other: DateRange): boolean;

        adjacent(other: DateRange): boolean;

        duration(unit?: moment.unitOfTime.Diff, precise?: boolean): number;

        reverseBy(interval: moment.unitOfTime.Diff, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

        reverseByRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<Moment>;

    }

    function extendMoment(moment: any): any;

    function range(range: string | Date[] | Moment[]): moment.Range;
    function range(start: Date | Moment, end: Date | Moment): moment.Range;
}
