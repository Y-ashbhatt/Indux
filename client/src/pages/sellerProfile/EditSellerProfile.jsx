import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Avatar,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import dummySellerData from "../../data/dummySellerData";

const EditSellerProfile = () => {
  const { id } = useParams(); // Get seller ID from URL
  const seller = dummySellerData.find((seller) => seller.id === parseInt(id)); // Find seller by ID

  // If the seller isn't found, show a fallback message
  if (!seller) {
    return <Typography variant="h6">Seller Not Found</Typography>;
  }

  // State to hold form values
  const [formData, setFormData] = useState({
    name: seller.name,
    role: seller.role,
    totalProjects: seller.totalProjects,
    about: "Tell us about yourself...", // Placeholder for now
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ padding: 3, maxWidth: "1200px", margin: "0 auto", mt: 5 }}>
      {/* Breadcrumb */}
      <Typography variant="body2" sx={{ marginBottom: 2, color: "gray" }}>
        Home / Edit Profile
      </Typography>

      {/* Main Content */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "300px 1fr" }}
        gap={3}
        sx={{ backgroundColor: "#f3f0fc", padding: 3, borderRadius: 3 }}
      >
        {/* Profile Card */}
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
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {seller.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {seller.role}
          </Typography>
          <Box mt={3}>
            <Typography variant="h4" fontWeight="bold">
              {seller.totalProjects}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Projects
            </Typography>
          </Box>
        </Card>

        {/* Edit Profile Form */}
        <Card
          sx={{
            backgroundColor: "#e0d7f7",
            padding: 3,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ marginBottom: 3, textAlign: "left" }}
          >
            Edit Profile Details:
          </Typography>

          {/* Profile Picture Edit Area */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
            sx={{ marginBottom: 3 }}
          >
            <Avatar
              src={seller.imageUrl}
              alt={seller.name}
              sx={{
                width: 80,
                height: 80,
                border: "2px solid white",
                backgroundColor: "white",
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#6a4caf",
                color: "white",
                "&:hover": { backgroundColor: "#55349d" },
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>

          <form>
            {/* Name Field */}
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your name"
              sx={{
                marginBottom: 2,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />

            {/* Email Field */}
            <Box display="flex" alignItems="center" gap={2} marginBottom={2}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Enter your email"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6a4caf",
                  color: "white",
                  height: "56px",
                }}
              >
                Verify
              </Button>
            </Box>

            {/* Mobile Number Field */}
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              variant="outlined"
              placeholder="Enter your mobile number"
              sx={{
                marginBottom: 2,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />

            {/* Tabs (Are You?) */}
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ marginBottom: 1 }}
            >
              Are You?
            </Typography>
            <Tabs
              value={0} // Static for now
              sx={{
                marginBottom: 2,
                "& .MuiTabs-indicator": {
                  backgroundColor: "#6a4caf",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label="Buyer" />
              <Tab label="Seller" />
              <Tab label="Tenant" />
              <Tab label="Others" />
            </Tabs>

            {/* About Field */}
            <TextField
              fullWidth
              multiline
              rows={4}
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              label="About"
              variant="outlined"
              placeholder="Tell us about yourself"
              sx={{
                marginBottom: 3,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            />

            {/* Save Button */}
            <Box textAlign="right">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6a4caf",
                  color: "white",
                  padding: "10px 30px",
                  borderRadius: 2,
                }}
              >
                Save Details
              </Button>
            </Box>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default EditSellerProfile;
