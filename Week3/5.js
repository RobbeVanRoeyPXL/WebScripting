class Vector {
    constructor(x, y) {
        if (x instanceof Number) {
            throw InputError(`${x} is not a number!`)
        } else if (y instanceof Number) {
            throw InputError(`${y} is not a number!`)
        } else {
            this.x = x;
            this.y = y;
        }
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.x, 2));
    }

    set length(value) {
        this._length = value;
    }

    plus(vector) {
        if (vector instanceof Vector) {
            return new Vector(this.x + vector.x, this.y + vector.y);
        } else {
            throw InputError(`${vector} is not a Vector`);
        }
    }

    minus(vector) {
        if (vector instanceof Vector) {
            return new Vector(this.x - vector.x, this.y - vector.y);
        } else {
            throw InputError(`${vector} is not a Vector`);
        }
    }

    toString() {
        return `(${this.x},${this.y})`;
    }
}

class InputError extends Error {}

let vector = new Vector(1, 2);
console.log(vector.length);

try {
    console.log(vector.plus(new Vector(1, 3)));
    console.log(vector.minus(new Vector(2, 3)));
} catch (inputError) {
    console.log(`An inputError with message '${inputError.message}' occurred`);
}

