import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step/step"

//validations
import { validarEmail, validarPassword} from "./DatosUsuario/validaciones"

const Form = () => {

  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({})

  const updateStep = (step) => {
    console.log(step)
    setStep(step)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1;
    setStep(newStep);
    console.log("newStep", newStep);
    console.log(step);

  }

  const handleChange = (element, currentStep, position, validator) => {
    const value = element.target.value;
    const isValid = validator(value);
    console.log(value);
    console.log("paso:", currentStep);
    console.log("posicion:", position);
    console.log("funcion:", validator);
    console.log("Es valido?:", isValid);

    stepsFlow[0].inputs[0].label = "Nombre";
    stepsFlow[0].inputs[1].label = "no pase perro"
    console.log(stepsFlow)

  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo Electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helpertext: "Ingresar un correo electronico valido.",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helpertext:  "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20." ,
          validator: validarPassword,     
        }
      ], 
      buttonText: "Siguiente",
      onSubmit
    },
    1: {
      inputs: [
        {
          label: "Correo Electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helpertext: "Ingresar un correo electronico valido.",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helpertext:  "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20." ,
          validator: validarPassword,     
        }
      ], 
      buttonText: "Siguiente",
      onSubmit
    }
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1:<DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]}  step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
