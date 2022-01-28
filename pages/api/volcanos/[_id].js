//! the link: http://localhost:3000/api/volcanos/61efff2addb6e3da9cebff92

import clientPromise from "../../../lib/mongodb";

export default async function handler({ query: { _id } }, res) {
  const client = await clientPromise;
  const db = client.db("final_project");
  const data = await db.collection("volcano_v2").find({}).toArray();
  const games = JSON.parse(JSON.stringify(data));

  const filtered = games.filter((game) => game._id === _id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(400).json({ message: "Game is not found." });
  }
}
