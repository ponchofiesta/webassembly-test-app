import HanoiJS from "./HanoiJS";

it('calculates Towser of Hanoi', () => {
    let hanoi = new HanoiJS();
    let actual = hanoi.hanoi(3, "A", "B", "C");
    expect(actual).toEqual("A->C\nA->B\nC->B\nA->C\nB->A\nB->C\nA->C\n");
});
