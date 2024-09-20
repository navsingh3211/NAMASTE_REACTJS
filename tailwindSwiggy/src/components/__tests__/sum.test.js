import { sum } from "../sum";

test("Sum function should calculate the some of two number",()=>{
    const result = sum(2,3);

    //Assertion
    expect(result).toBe(5);
});