/* GET: http://localhost:8080/api/test */
export async function testController(req, res) {
    return res.status(201).send({"message": "Test route working fine!"});
}