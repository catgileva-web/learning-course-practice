Charts - Animation
Learn how to customize both CSS and JavaScript-based Chart animations.
ads via Carbon
Your best Blockchain infra deal. New AMD powered Servers. No ingress or egress fees. From £85.99/m
ads via Carbon

Some elements of the MUI X Charts are animated by default. For example, the bars in a Bar Chart rise from the axis, and the slices in a Pie Chart expand to fill the circle.

These animations are primarily built with CSS, but some use JavaScript-based React hooks as well. You can use these hooks to animate other elements of the Charts that aren't animated by default, or to add animations to your own custom components.

To customize Chart animations, you may need to override CSS classes or implement the custom hooks provided, depending on your specific use case.

Customizing CSS animations

You can override the default CSS classes to customize CSS-based animations. The demo below shows how you can increase the label's animation duration to two seconds:

import * as React from 'react';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function CSSAnimationCustomization() {
  const [key, rerender] = React.useReducer((x) => x + 1, 0);

  return (
    <Stack>
      <PieChart
        key={key}
        series={[{ data, arcLabel: (item) => `${item.value}` }]}
        width={200}
        height={200}
        hideLegend
        sx={{
          [`& .${pieArcLabelClasses.root}.${pieArcLabelClasses.animate}`]: {
            animationDuration: '2s',
          },
        }}
      />
      <Button onClick={() => rerender()}>Restart Animation</Button>
    </Stack>
  );
}
import * as React from 'react';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function CSSAnimationCustomization() {
  const [key, rerender] = React.useReducer((x) => x + 1, 0);

  return (
    <Stack>
      <PieChart
        key={key}
        series={[{ data, arcLabel: (item) => `${item.value}` }]}
        width={200}
        height={200}
        hideLegend
        sx={{
          [`& .${pieArcLabelClasses.root}.${pieArcLabelClasses.animate}`]: {
            animationDuration: '2s',
          },
        }}
      />
      <Button onClick={() => rerender()}>Restart Animation</Button>
    </Stack>
  );
}
Press Enter to start editing
AWS - Databases that are secure, reliable, and built for performance.
ad by Carbon
Customizing JavaScript animations

To override JavaScript-based animations—or to use the Chart animations in custom components—you can use the custom animation hooks.

The Charts package provides the following animation hooks:

useAnimateArea()
useAnimateBar()
useAnimateBarLabel()
useAnimateLine()
useAnimatePieArc()
useAnimatePieArcLabel()
The demo below illustrates how to use these hooks by animating the bar labels to match the bar animation—click Run Animation to see it in action:

import { BarChart, BarLabelProps } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { useAnimateBarLabel } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function JSDefaultAnimation() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <BarChart
        key={key}
        xAxis={[{ data: ['A', 'B', 'C'] }]}
        series={[
          {
            type: 'bar',
            data: [5, 17, 11],
          },
          {
            type: 'bar',
            data: [0, 12, 15],
          },
          {
            type: 'bar',
            data: [1, 3, 9],
          },
        ]}
        width={300}
        height={400}
        barLabel="value"
        slots={{ barLabel: AnimatedBarLabel }}
      />
      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme)?.palette?.text?.primary,
}));

function AnimatedBarLabel(props: BarLabelProps) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimateBarLabel({
    xOrigin,
    x,
    yOrigin,
    y,
    width,
    height,
    layout,
    skipAnimation,
  });

  return (
    <Text
      {...otherProps}
      textAnchor="middle"
      dominantBaseline="central"
      {...animatedProps}
    />
  );
}
import { BarChart, BarLabelProps } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { useAnimateBarLabel } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function JSDefaultAnimation() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <BarChart
        key={key}
        xAxis={[{ data: ['A', 'B', 'C'] }]}
        series={[
          {
            type: 'bar',
            data: [5, 17, 11],
          },
          {
            type: 'bar',
            data: [0, 12, 15],
          },
          {
            type: 'bar',
            data: [1, 3, 9],
          },
        ]}
        width={300}
        height={400}
        barLabel="value"
        slots={{ barLabel: AnimatedBarLabel }}
      />
      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme)?.palette?.text?.primary,
}));

function AnimatedBarLabel(props: BarLabelProps) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimateBarLabel({
    xOrigin,
    x,
    yOrigin,
    y,
    width,
    height,
    layout,
    skipAnimation,
  });

  return (
    <Text
      {...otherProps}
      textAnchor="middle"
      dominantBaseline="central"
      {...animatedProps}
    />
  );
}
Press Enter to start editing
SmartBear - Innovate your SDLC with SmartBear AI to transform your software development and testing processes.
ad by Carbon
The useAnimate() hook

For more fine-grained animation customization, you can use the useAnimate(props, params) hook. This hook returns a ref as well as props to pass to the animated element. Each time the props params are updated, the hook creates an interpolation from the previous value to the next one. As each animation frame loads, it calls this interpolator to get the intermediate state and applies the result to the animated element. (The attribute update is imperative to bypass the React lifecycle for improved performance.)

With params you can define the following properties:

skip: If true, apply the new value immediately
ref: A ref to merge with the ref returned from this hook
initialProps: The props used to generate the animation of component creation; if none are provided, there is no initial animation
createInterpolator: Create an interpolation function from the last to the next props
transformProps: Optionally transform interpolated props to another format
applyProps: Apply transformed props to the element
You can find more detailed explanations in the hook's JSDoc.

In the example below, labels are positioned above the bars they refer to and are animated with the useAnimate() hook:

import { BarChart, BarLabelProps } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { useAnimate } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';

export default function JSAnimationCustomization() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <BarChart
        key={key}
        xAxis={[{ data: ['A', 'B', 'C'] }]}
        series={[
          {
            type: 'bar',
            data: [5, 17, 11],
          },
          {
            type: 'bar',
            data: [0, 12, 15],
          },
          {
            type: 'bar',
            data: [1, 3, 9],
          },
        ]}
        width={300}
        height={400}
        barLabel="value"
        slots={{ barLabel: AnimatedBarLabel }}
      />
      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

function AnimatedBarLabel(props: BarLabelProps) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: x + width / 2, y: y - 2 },
    {
      initialProps: { x: x + width / 2, y: yOrigin },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element: SVGTextElement, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    },
  );

  return (
    <text {...otherProps} fill={color} textAnchor="middle" {...animatedProps} />
  );
}
import { BarChart, BarLabelProps } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { useAnimate } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';

export default function JSAnimationCustomization() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <BarChart
        key={key}
        xAxis={[{ data: ['A', 'B', 'C'] }]}
        series={[
          {
            type: 'bar',
            data: [5, 17, 11],
          },
          {
            type: 'bar',
            data: [0, 12, 15],
          },
          {
            type: 'bar',
            data: [1, 3, 9],
          },
        ]}
        width={300}
        height={400}
        barLabel="value"
        slots={{ barLabel: AnimatedBarLabel }}
      />
      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

function AnimatedBarLabel(props: BarLabelProps) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: x + width / 2, y: y - 2 },
    {
      initialProps: { x: x + width / 2, y: yOrigin },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element: SVGTextElement, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    },
  );

  return (
    <text {...otherProps} fill={color} textAnchor="middle" {...animatedProps} />
  );
}
Press Enter to start editing
AWS - Accelerate innovation, reduce costs, and secure your data with AWS cloud storage.
ad by Carbon
Third-party animation libraries

You can fully override the default Chart animations with your own (third-party) animation library.

Third-party JavaScript animation libraries can cause performance issues, especially if you're rendering many data points or enabling interactions like zooming or highlighting. It's essential to test the performance of your charts with your chosen animation library.

React Spring

The demo below shows how to integrate React Spring to add a bounce effect to the bar label animation:

import { BarChart, BarLabelProps } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ReactSpringAnimationCustomization() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <BarChart
        key={key}
        xAxis={[{ data: ['A', 'B', 'C'] }]}
        series={[
          {
            type: 'bar',
            data: [5, 17, 11],
          },
          {
            type: 'bar',
            data: [0, 12, 15],
          },
          {
            type: 'bar',
            data: [1, 3, 9],
          },
        ]}
        width={300}
        height={400}
        barLabel="value"
        slots={{ barLabel: AnimatedBarLabel }}
      />

      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

function AnimatedBarLabel(props: BarLabelProps) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const style = useSpring({
    from: { y: yOrigin },
    to: { y: y - 4 },
    config: { tension: 100, friction: 10 },
  });

  return (
    <animated.text
      {...otherProps}
      // @ts-ignore
      fill={color}
      x={xOrigin + x + width / 2}
      width={width}
      height={height}
      style={style}
      textAnchor="middle"
    />
  );
}
import { BarChart, BarLabelProps } from '@mui/x-charts/BarChart';
import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ReactSpringAnimationCustomization() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <BarChart
        key={key}
        xAxis={[{ data: ['A', 'B', 'C'] }]}
        series={[
          {
            type: 'bar',
            data: [5, 17, 11],
          },
          {
            type: 'bar',
            data: [0, 12, 15],
          },
          {
            type: 'bar',
            data: [1, 3, 9],
          },
        ]}
        width={300}
        height={400}
        barLabel="value"
        slots={{ barLabel: AnimatedBarLabel }}
      />

      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

function AnimatedBarLabel(props: BarLabelProps) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const style = useSpring({
    from: { y: yOrigin },
    to: { y: y - 4 },
    config: { tension: 100, friction: 10 },
  });

  return (
    <animated.text
      {...otherProps}
      // @ts-ignore
      fill={color}
      x={xOrigin + x + width / 2}
      width={width}
      height={height}
      style={style}
      textAnchor="middle"
    />
  );
}
Press Enter to start editing
SmartBear - Innovate your SDLC with SmartBear AI to transform your software development and testing processes.
ad by Carbon
Motion

The following demo uses the Motion library for a fade-in effect on the points and lines in the chart:

import {
  LineChart,
  type AnimatedLineProps,
  type MarkElementProps,
} from '@mui/x-charts/LineChart';
import * as React from 'react';
import { motion } from 'motion/react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MotionAnimationCustomization() {
  const [key, animate] = React.useReducer((v) => v + 1, 0);

  return (
    <Stack>
      <LineChart
        key={key}
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            curve: 'linear',
          },
          {
            data: [3, 4, 6, 7, 9, 11],
            curve: 'linear',
          },
        ]}
        width={500}
        height={300}
        slots={{
          line: AnimatedLine,
          mark: AnimatedMark,
        }}
      />
      <Button onClick={() => animate()}>Run Animation</Button>
    </Stack>
  );
}

function AnimatedLine({ d, ownerState, skipAnimation }: AnimatedLineProps) {
  return (
    <motion.path
      d={d}
      fill="transparent"
      stroke={ownerState.color}
      initial={{
        opacity: skipAnimation ? 1 : 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    />
  );
}

function AnimatedMark({ x, y, color, skipAnimation }: MarkElementProps) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={5}
      fill={color}
      initial={{
        scale: skipAnimation ? 1 : 0,
        opacity: skipAnimation ? 1 : 0,
      }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: 'backOut' }}
    />
  );
}
