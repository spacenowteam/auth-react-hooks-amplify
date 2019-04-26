const service = async props => {
  console.log(JSON.stringify(props))
  await fetch("http://localhost:2000/graphql", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
      Autorization: "Test"
    }
  });
}

export default service
