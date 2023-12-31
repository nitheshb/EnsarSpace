import React, { useEffect, useState } from 'react';
import { Box, Checkbox, styled, Table, TableBody, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useSnackbar } from 'notistack';

import StyledButton from 'src/components/RoundedButton';
import { getAllRoleAccess, updateAccessRoles } from 'src/context/dbQueryFirebase';
import { useAuth } from 'src/context/firebase-auth-context';
import { getPagesBasedonRoles } from 'src/util/PagesBasedOnRoles';

import TableData from '../A_AccessManagement/TableData';

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderTop: '1px solid rgba(224, 224, 224, 1)',
  borderBottom: '1px solid rgba(224, 224, 224, 1)',
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 900,
    fontSize: 12,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    letterSpacing: 0.8,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    textAlign: 'center',
    borderBottom: 0,
    '&:first-child': {
      textAlign: 'left',
    },
  },
}));

const StickyTableCell = styled(TableCell)(({ theme }) => ({
  minWidth: '50px',
  left: 0,
  position: 'sticky',
  zIndex: theme.zIndex.appBar + 1,
  borderBottom: 0,
  backgroundColor: '#F5F5F5',
}));

const StickyHeaderCell = styled(TableCell)(({ theme }) => ({
  minWidth: '50px',
  left: 0,
  position: 'sticky',
  zIndex: theme.zIndex.appBar + 2,
  borderBottom: 0,
  backgroundColor: '#F5F5F5',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    backgroundColor: '#F5F5F5',
  },
}));

const StyledCheckBox = styled(Checkbox)(() => ({
  padding: 0,
}));

const UserAccessTable = () => {
  const [category, setCategory] = useState('all');
  const [settings, setSettings] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { user } = useAuth();
  const { orgId } = user;
  const { enqueueSnackbar } = useSnackbar();

  const getAllRoleAccessDocs = async () => {
    const data = await getAllRoleAccess(orgId);
    setSettings(data);
  };

  useEffect(() => {
    getAllRoleAccessDocs();
    setCategory('all');
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilterData(settings);
    } else {
      const updatedData = settings.map((item) => {
        return {
          ...item,
          access: item.access.filter((access) =>
            getPagesBasedonRoles(category).includes(access.key)
          ),
        };
      });
      setFilterData(updatedData);
    }
  }, [category, settings]);

  const onRoleChangeListener = async (role, element) => {
    let newAccess = {};
    const newSettings = settings.map((item) => {
      if (item.uid === role.uid) {
        newAccess = item.access.map((accessRole) => {
          if (accessRole.key === element.key) {
            return {
              ...accessRole,
              checked: !element.checked,
            };
          }
          return accessRole;
        });
        item.access = newAccess;
        return item;
      }
      return item;
    });
    setSettings(newSettings);
    await updateAccessRoles(orgId, role, newAccess, user, enqueueSnackbar, element);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <Box className="bg-white pb-4">
      <Box className="flex ml-auto  mb-[0.5px] bg-white py-4">
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'all'}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'trainee'}
          onClick={() => handleCategoryChange('trainee')}
        >
          Trainee
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'support'}
          onClick={() => handleCategoryChange('support')}
        >
          Support
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'legal'}
          onClick={() => handleCategoryChange('legal')}
        >
          Legal
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'admin'}
          onClick={() => handleCategoryChange('admin')}
        >
          Admin
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'project'}
          onClick={() => handleCategoryChange('project')}
        >
          Project
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'executive'}
          onClick={() => handleCategoryChange('executive')}
        >
          Executive
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'hr'}
          onClick={() => handleCategoryChange('hr')}
        >
          HR
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          isCategoryMatched={category === 'sales'}
          onClick={() => handleCategoryChange('sales')}
        >
          Sales
        </StyledButton>
      </Box>
      <Box sx={{ height: (2 / 3) * window.innerHeight, overflowX: 'auto', width: '1130px' }}>
        <Table stickyHeader>
          <StyledTableHead>
            <StyledTableRow>
              {filterData?.[0] && (
                <StickyHeaderCell>
                  <StyledTableCell>Type</StyledTableCell>
                </StickyHeaderCell>
              )}
              {filterData?.[0]?.access?.map(({ name, key }) => (
                <StyledTableCell key={key}>{name}</StyledTableCell>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableData data={filterData} onRoleChangeListener={onRoleChangeListener} />
          <TableBody>
            {filterData?.map((item) => (
              <StyledTableRow key={item.uid}>
                {item?.access?.map((access) => (
                  <TableCell key={access.key} align="center">
                    <StyledCheckBox
                      checked={access.checked}
                      onChange={() => onRoleChangeListener(item, access)}
                    />
                  </TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default UserAccessTable;
