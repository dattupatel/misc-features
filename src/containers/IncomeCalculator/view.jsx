import React, { useState, useEffect, useMemo, useCallback } from "react";
import moment from "moment";
import * as CONSTANTS from "../../constants";
import { Box } from "@mui/system";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const IncomeCalculatorViewComponent = ({
  amount,
  taxes,
  hours,
  startDate,
  endDate,
  paidAfter,
  workdays = [],
  holidays = [],
  daysOff = [],
}) => {
  const [dates, setDates] = useState([]);

  const isDayOff = useCallback(
    (day) => {
      let isOff = false;
      daysOff.forEach((off) => {
        const current = moment(day, CONSTANTS.DATE_FORMAT);
        const start = moment(off[0], CONSTANTS.DATE_FORMAT);
        const end = moment(off[1], CONSTANTS.DATE_FORMAT);
        if (current.isBetween(start, end)) {
          isOff = true;
        }
      });
      return isOff;
    },
    [daysOff]
  );

  useEffect(() => {
    if (
      moment(startDate, CONSTANTS.DATE_FORMAT).isValid() &&
      moment(endDate, CONSTANTS.DATE_FORMAT).isValid()
    ) {
      const data = [];
      const current = moment(startDate, CONSTANTS.DATE_FORMAT).toDate();
      do {
        const dates = [];
        for (let i = 0; i < 14; i++) {
          const c = new Date(current);

          if (c < moment(endDate, CONSTANTS.DATE_FORMAT).toDate()) {
            dates.push({
              date: c,
              isWorkDay: workdays[moment(c).day()],
              isDayOff: isDayOff(c),
            });
          }
          current.setDate(current.getDate() + 1);
        }

        const numberOfWorkingDays = dates.filter(
          (date) => date.isWorkDay && !date.isDayOff
        ).length;

        const s = dates[0]?.date;
        const e = dates[dates.length - 1]?.date;
        const p = new Date(e);
        p.setDate(p.getDate() + Number(paidAfter));

        const item = {
          startDate: s,
          endDate: e,
          payDate: p,
          numberOfDays: dates.length,
          numberOfWorkingDays: numberOfWorkingDays,
          base: amount * hours * numberOfWorkingDays,
          total: (
            amount *
            hours *
            numberOfWorkingDays *
            (taxes / 100 + 1)
          ).toFixed(2),
          dates: dates,
        };

        data.push(item);
      } while (current < moment(endDate, CONSTANTS.DATE_FORMAT).toDate());

      setDates(data);
    }
  }, [startDate, endDate, workdays, amount, taxes, hours, paidAfter, isDayOff]);

  const views = useMemo(() => {
    return [
      {
        label: "Total Weeks",
        value: dates.length,
      },
      {
        label: "Total base",
        value: `$${dates
          .map((d) => d.base)
          .reduce((prev, curr) => Number(prev) + Number(curr), 0)
          .toFixed(2)}`,
      },
      {
        label: "Total pay",
        value: `$${dates
          .map((d) => d.total)
          .reduce((prev, curr) => Number(prev) + Number(curr), 0)
          .toFixed(2)}`,
      },
      {
        label: "Base per day",
        value: `$${hours * amount}`,
      },
      {
        label: "Total per day",
        value: `$${(hours * amount * (taxes / 100 + 1)).toFixed(2)}`,
      },
    ];
  }, [amount, dates, hours, taxes]);

  return (
    <Box>
      <Box mb={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {views.map((view) => (
                <TableRow key={view.label}>
                  <TableCell>
                    <Typography variant="subtitle1">{view.label}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{view.value}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Pay Date</TableCell>
                <TableCell>Base Pay</TableCell>
                <TableCell>Total Pay</TableCell>
                <TableCell>Working days</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dates.map((range) => (
                <TableRow key={range.startDate}>
                  <TableCell>
                    <Typography>
                      {moment(range.startDate).format(CONSTANTS.DATE_FORMAT)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {moment(range.endDate).format(CONSTANTS.DATE_FORMAT)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {moment(range.payDate).format(CONSTANTS.DATE_FORMAT)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>${range.base}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>${range.total}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{range.numberOfWorkingDays}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <pre>{JSON.stringify(dates, null, 2)}</pre>
      </Box>
    </Box>
  );
};

export default IncomeCalculatorViewComponent;
