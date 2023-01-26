import * as React from "react";
import {
  CardMedia,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  Card,
} from "@mui/material";
import { useState, useEffect } from "react";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/system";
const TypographyFoodName = (props) => (
  <Typography align="center" variant="subtitle1" sx={{ fontWeight: "bold" }}>
    {props.children}
  </Typography>
);

const TitleTextField = (props) => (
  <Typography
    variant="subtitle1"
    color={"otherColor.grey.main"}
    sx={{ fontWeight: "bold", pt: 2 }}
  >
    {props.children}
  </Typography>
);

const BtnTools = (props) => (
  <Button
    onClick={props.handleClick}
    color={props.color}
    variant="outlined"
    size="large"
    sx={{ width: `100%` }}
  >
    {props.children}
  </Button>
);

export function DetailsSelectionFood(props) {
  const [objData, setObjData] = useState(null);
  useEffect(() => {
    setObjData(props?.data ?? null);
  }, [props]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: `100%` }}
      >
        {/* alignItems="stretch" */}

        <Grid item>
          <>
            {/* HEADER */}
            <TypographyFoodName>
              {objData?.title ?? "ไม่ระบุ"}
            </TypographyFoodName>
            {/*IMAGE*/}
            <Grid container spacing={1} justifyContent="center" sx={{ my: 1 }}>
              <Grid item xs={12}>
                <CardMedia
                  style={{ aspectRatio: 4 / 3 }}
                  lazy
                  image={objData?.img ?? ""}
                  title="green iguana"
                />
              </Grid>
            </Grid>

            {/* DETAIL */}
            <Grid container>
              <Grid item>
                <TitleTextField>รายละเอียด :</TitleTextField>
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <Container
                    disableGutters
                    sx={{ height: 120, overflowY: "scroll", px: 1 }}
                  >
                    <Typography variant="subtitle1">
                      {objData?.detail ?? "ไม่ระบุ"}
                    </Typography>
                  </Container>
                </Card>
              </Grid>
            </Grid>

            {/* PRICE */}
            <Grid container>
              <Grid item>
                <TitleTextField>ราคา :</TitleTextField>
              </Grid>
              <Grid item xs={12}>
                {/* Price */}
                {objData?.price?.type === "list" ? (
                  (objData?.price?.list ?? []).map((item, index) => (
                    <>
                      <Typography>{`${item.title} : ${item.value} บาท`}</Typography>
                    </>
                  ))
                ) : (
                  <Typography variant="subtitle1">
                    {`${objData?.price?.default ?? "error"} บาท`}
                  </Typography>
                )}
              </Grid>
            </Grid>
            {/* TAGS */}
            <Grid container>
              <Grid item>
                <TitleTextField>Tags :</TitleTextField>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0.2} alignItems="center">
                  {(objData?.tags.slice(0, 4) ?? []).map((itemTag, indexTag) =>
                    indexTag !== 3 ? (
                      <Grid
                        xs={3}
                        item
                        key={`tags-${itemTag.title ?? ""}-${indexTag}`}
                      >
                        <Chip
                          icon={
                            <Icon color={itemTag?.color ?? "grey"}>
                              {itemTag?.icon ?? ""}
                            </Icon>
                          }
                          label={itemTag?.title ?? "ไม่ระบุ"}
                          variant="outlined"
                        />
                      </Grid>
                    ) : (
                      <Grid
                        item
                        xs={3}
                        key={`tags-${itemTag.title ?? ""}-${indexTag}`}
                      >
                        <Button color="secondary" size="small">
                          {objData?.tags?.length - 3 ?? "error"}+
                        </Button>
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </>
        </Grid>
        <Grid item>
          <>
            {/* Btn */}
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <BtnTools
                  handleClick={props.handleOpenDialogEdit}
                  color="secondary"
                >
                  แก้ไข
                </BtnTools>
                {/* <div onClick={props.handleOpenDialogEdit}>แก้ไข</div> */}
                {/* <Button onClick={props.handleOpenDialogEdit}>แก้ไข</Button> */}
              </Grid>
              <Grid item xs={6}>
                <BtnTools color="error">ลบ</BtnTools>
              </Grid>
            </Grid>
          </>
        </Grid>
      </Grid>
    </>
  );
}
