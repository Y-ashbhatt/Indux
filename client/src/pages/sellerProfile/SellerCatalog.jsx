import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, Avatar, Typography, Button, Grid } from "@mui/material";
import dummySellerData from "./dummySellerData";

const SellerCatalog = () => {
  return (
    <Box sx={{ padding: 3, maxWidth: "1200px", margin: "0 auto", mt: 10 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 3 }}>
        Sellers
      </Typography>
      <Grid container spacing={3}>
        {dummySellerData.map((seller) => (
          <Grid item xs={12} sm={6} md={4} key={seller.id}>
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
                  width: 100,
                  height: 100,
                  margin: "0 auto",
                  marginBottom: 2,
                  border: "4px solid white",
                }}
              />
              <Typography variant="h6" fontWeight="bold">
                {seller.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {seller.role}
              </Typography>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ marginBottom: 2 }}
              >
                {seller.totalProjects} Total Projects
              </Typography>
              <Button
                component={Link}
                to={`/display-seller-profile/${seller.id}`}
                variant="contained"
                sx={{
                  backgroundColor: "#6a4caf",
                  color: "white",
                  textTransform: "none",
                }}
              >
                View Profile
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellerCatalog;
