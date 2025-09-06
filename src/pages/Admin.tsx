import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { format } from 'date-fns';
import AppleBackground from '../components/AppleBackground';

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch contacts');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to delete contact');
    }
  };

  const handleView = (contact: Contact) => {
    setSelectedContact(contact);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedContact(null);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <AppleBackground variant="tertiary" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{
            color: '#8be9fd',
            fontWeight: 600,
            textAlign: 'center',
            mb: 4
          }}
        >
          Contact Form Submissions
        </Typography>

      {error && (
        <Alert 
          severity="error" 
          sx={{ 
            mb: 2,
            backgroundColor: 'rgba(211, 47, 47, 0.1)',
            color: '#e57373',
            '& .MuiAlert-icon': {
              color: '#e57373'
            }
          }}
        >
          {error}
        </Alert>
      )}

      <TableContainer 
        component={Paper}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #4fc3f7, #8be9fd)'
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8be9fd', fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ color: '#8be9fd', fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ color: '#8be9fd', fontWeight: 600 }}>Subject</TableCell>
              <TableCell sx={{ color: '#8be9fd', fontWeight: 600 }}>Date</TableCell>
              <TableCell sx={{ color: '#8be9fd', fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{contact.name}</TableCell>
                <TableCell sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{contact.email}</TableCell>
                <TableCell sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{contact.subject}</TableCell>
                <TableCell sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {format(new Date(contact.createdAt), 'MMM dd, yyyy HH:mm')}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleView(contact)}
                    size="small"
                    sx={{ color: '#4fc3f7' }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(contact._id)}
                    size="small"
                    sx={{ color: '#ff6b6b' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {contacts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  No submissions yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }
        }}
      >
        <DialogTitle sx={{ color: '#8be9fd', fontWeight: 600 }}>Contact Details</DialogTitle>
        <DialogContent>
          {selectedContact && (
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <Box component="span" sx={{ fontWeight: 600, color: '#4fc3f7' }}>Name:</Box> {selectedContact.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <Box component="span" sx={{ fontWeight: 600, color: '#4fc3f7' }}>Email:</Box> {selectedContact.email}
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <Box component="span" sx={{ fontWeight: 600, color: '#4fc3f7' }}>Subject:</Box> {selectedContact.subject}
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <Box component="span" sx={{ fontWeight: 600, color: '#4fc3f7' }}>Date:</Box>{' '}
                {format(new Date(selectedContact.createdAt), 'MMM dd, yyyy HH:mm')}
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <Box component="span" sx={{ fontWeight: 600, color: '#4fc3f7' }}>Message:</Box>
              </Typography>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  mt: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{selectedContact.message}</Typography>
              </Paper>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleCloseDialog}
            sx={{
              color: '#8be9fd',
              '&:hover': {
                backgroundColor: 'rgba(139, 233, 253, 0.1)'
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </Box>
  );
};

export default Admin;
