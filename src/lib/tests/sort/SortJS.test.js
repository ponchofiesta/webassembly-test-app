import SortJS from "./SortJS";

it('calculates Towser of Hanoi', () => {
    let data = [
        {"id":1,"name":"Husein Newcome"},
        {"id":2,"name":"Bourke Frizell"},
        {"id":3,"name":"Lenore Chippindale"},
        {"id":4,"name":"Jeff Kennford"}
    ];
    let actual = new SortJS().sort(data);

    expect(actual).toEqual([
        {"id":2,"name":"Bourke Frizell"},
        {"id":1,"name":"Husein Newcome"},
        {"id":4,"name":"Jeff Kennford"},
        {"id":3,"name":"Lenore Chippindale"}
    ]);
});
