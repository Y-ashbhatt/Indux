import React from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Avatar, Typography, Button } from "@mui/material";
import dummySellerData from "./dummySellerData";

const DisplaySellerProfile = () => {
  const { id } = useParams(); // Get seller ID from URL
  const seller = dummySellerData.find((seller) => seller.id === parseInt(id));

  if (!seller) {
    return <Typography variant="h6">Seller Not Found</Typography>;
  }

  return (
    <Box sx={{ padding: 3, maxWidth: "600px", margin: "0 auto" }}>
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", mb: 2, mt: 10 }}
      >
        <Button
          variant="contained"
          href={`/edit-seller-profile/${seller.id}`}
          sx={{
            backgroundColor: "#6a4caf",
            color: "white",
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Edit Profile
        </Button>
      </Box>

      <Card
        sx={{
          backgroundColor: "#e0d7f7",
          padding: 3,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Avatar
          src={seller.imageUrl}
          alt={seller.name}
          sx={{
            width: 120,
            height: 120,
            margin: "0 auto",
            marginBottom: 2,
            border: "4px solid white",
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          {seller.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {seller.role}
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {seller.totalProjects} Total Projects
        </Typography>
      </Card>
    </Box>
  );
};

export default DisplaySellerProfile;
