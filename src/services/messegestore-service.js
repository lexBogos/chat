export default class MessagestoreService {
    data  = [
      {
        time: 1565528619402,
        id: "40d98fb34405ec77",
        from: "peshkov",
        message: "11"
      },
      {
        time: 1565527604793,
        id: "92739119931be4f8",
        from: "loongggggggggggggggggggggggggggggggggggggggggggggggggggggg",
        message: "s"
      }
    ]; 

    getMessages() {
      return new Promise((resolve) => {
        setTimeout(() => {resolve(this.data)}, 0)
      })
    }
  }