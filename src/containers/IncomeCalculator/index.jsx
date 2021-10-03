import React, { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  Grid,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Divider,
} from "@mui/material";
import { MobileDatePicker } from "@mui/lab";
import IncomeCalculatorViewComponent from "./view";
import * as CONSTANTS from "../../constants";

const IncomeCalculatorContainer = () => {
  const [amount, setAmount] = useState(0);
  const [taxes, setTaxes] = useState(13);
  const [hours, setHours] = useState(7.5);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [paidAfter, setPaidAfter] = useState(1);

  const [workdays, setWorkDays] = useState({
    Sunday: false,
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
  });

  const onChangedAmount = (e) => {
    setAmount(e.currentTarget.value);
  };

  const onChangedTaxes = (e) => {
    setTaxes(e.currentTarget.value);
  };

  const onChangedHours = (e) => {
    setHours(e.currentTarget.value);
  };

  const onChangedStartDate = (value) => {
    setStartDate(value);
  };

  const onChangedEndDate = (value) => {
    setEndDate(value);
  };

  const onChangedPaidAfter = (e) => {
    setPaidAfter(e.currentTarget.value);
  };

  const onChangedWorkDays = (e, checked) => {
    setWorkDays((prev) => ({
      ...prev,
      [e.currentTarget.value]: checked,
    }));
  };

  return (
    <Box>
      <h1>Income Calculator</h1>
      <Box mb={3}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-start"
              alignItems="center"
              sx={{ ml: 1 }}
            >
              <Grid item xs={2}>
                <TextField
                  label="$/hr"
                  type="number"
                  min={0}
                  value={amount}
                  onChange={onChangedAmount}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Taxes %"
                  type="number"
                  min={0}
                  value={taxes}
                  onChange={onChangedTaxes}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="hr/day"
                  type="number"
                  min={0}
                  step={0.5}
                  value={hours}
                  onChange={onChangedHours}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Paid after days"
                  type="number"
                  min={0}
                  value={paidAfter}
                  onChange={onChangedPaidAfter}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-start"
              alignItems="center"
              sx={{ ml: 1 }}
            >
              <Grid item xs={6}>
                <Stack spacing={3}>
                  <MobileDatePicker
                    label="Start Date"
                    inputFormat={CONSTANTS.DATE_FORMAT}
                    value={startDate}
                    onChange={onChangedStartDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={3}>
                  <MobileDatePicker
                    label="End Date"
                    inputFormat={CONSTANTS.DATE_FORMAT}
                    value={endDate}
                    onChange={onChangedEndDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2}><FormLabel>Work Days:</FormLabel></Box>
            <Grid
              container
              spacing={1}
              justifyContent="flex-start"
              alignItems="center"
              sx={{ ml: 2 }}
            >
              {Object.keys(workdays).map((key) => (
                <FormControlLabel
                  key={key}
                  label={key}
                  control={
                    <Checkbox
                      checked={workdays[key]}
                      value={key}
                      onChange={onChangedWorkDays}
                    />
                  }
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mb={3}>
        <Divider light={false} />
      </Box>
      <Box>
        <IncomeCalculatorViewComponent
          amount={amount}
          taxes={taxes}
          hours={hours}
          startDate={startDate}
          endDate={endDate}
          paidAfter={paidAfter}
          workdays={Object.keys(workdays).map((key) => workdays[key])}
        />
      </Box>
    </Box>
  );
};

export default IncomeCalculatorContainer;
