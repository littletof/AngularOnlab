export class Common {
    static removeFromArray(array: any[], item: any) {
        const index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    static contains(array: any[], item: any): boolean {
        if (array) {
           return array.indexOf(item) !== -1;
        }
        return false;
    }

    static mergeArray(a1: any[], a2: any[]): any[] {
        const base: any[] = a1.slice();
        a2.forEach(item => {
            if (!this.contains(base, item)) {
                base.push(item);
                base.sort();
            }
        });
        return base;
    }
}
