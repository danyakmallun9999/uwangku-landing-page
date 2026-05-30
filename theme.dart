import "package:flutter/material.dart";

class MaterialTheme {
  final TextTheme textTheme;

  const MaterialTheme(this.textTheme);

  static ColorScheme lightScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff466730),
      surfaceTint: Color(0xff466730),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xffc7eea9),
      onPrimaryContainer: Color(0xff2f4f1b),
      secondary: Color(0xff56624b),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xffd9e7ca),
      onSecondaryContainer: Color(0xff3e4a35),
      tertiary: Color(0xff386665),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xffbbeceb),
      onTertiaryContainer: Color(0xff1e4e4e),
      error: Color(0xffba1a1a),
      onError: Color(0xffffffff),
      errorContainer: Color(0xffffdad6),
      onErrorContainer: Color(0xff93000a),
      surface: Color(0xfff8faf0),
      onSurface: Color(0xff191d16),
      onSurfaceVariant: Color(0xff43483e),
      outline: Color(0xff74796d),
      outlineVariant: Color(0xffc4c8bb),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2e312a),
      inversePrimary: Color(0xffacd28f),
      primaryFixed: Color(0xffc7eea9),
      onPrimaryFixed: Color(0xff0a2100),
      primaryFixedDim: Color(0xffacd28f),
      onPrimaryFixedVariant: Color(0xff2f4f1b),
      secondaryFixed: Color(0xffd9e7ca),
      onSecondaryFixed: Color(0xff141e0c),
      secondaryFixedDim: Color(0xffbdcbaf),
      onSecondaryFixedVariant: Color(0xff3e4a35),
      tertiaryFixed: Color(0xffbbeceb),
      onTertiaryFixed: Color(0xff002020),
      tertiaryFixedDim: Color(0xffa0cfce),
      onTertiaryFixedVariant: Color(0xff1e4e4e),
      surfaceDim: Color(0xffd9dbd1),
      surfaceBright: Color(0xfff8faf0),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xfff3f5ea),
      surfaceContainer: Color(0xffedefe4),
      surfaceContainerHigh: Color(0xffe7e9df),
      surfaceContainerHighest: Color(0xffe1e4d9),
    );
  }

  ThemeData light() {
    return theme(lightScheme());
  }

  static ColorScheme lightMediumContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff1f3d0b),
      surfaceTint: Color(0xff466730),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xff55763d),
      onPrimaryContainer: Color(0xffffffff),
      secondary: Color(0xff2e3a25),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xff647159),
      onSecondaryContainer: Color(0xffffffff),
      tertiary: Color(0xff073d3d),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xff477574),
      onTertiaryContainer: Color(0xffffffff),
      error: Color(0xff740006),
      onError: Color(0xffffffff),
      errorContainer: Color(0xffcf2c27),
      onErrorContainer: Color(0xffffffff),
      surface: Color(0xfff8faf0),
      onSurface: Color(0xff0f120c),
      onSurfaceVariant: Color(0xff33382e),
      outline: Color(0xff4f5449),
      outlineVariant: Color(0xff6a6f63),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2e312a),
      inversePrimary: Color(0xffacd28f),
      primaryFixed: Color(0xff55763d),
      onPrimaryFixed: Color(0xffffffff),
      primaryFixedDim: Color(0xff3d5d27),
      onPrimaryFixedVariant: Color(0xffffffff),
      secondaryFixed: Color(0xff647159),
      onSecondaryFixed: Color(0xffffffff),
      secondaryFixedDim: Color(0xff4c5942),
      onSecondaryFixedVariant: Color(0xffffffff),
      tertiaryFixed: Color(0xff477574),
      onTertiaryFixed: Color(0xffffffff),
      tertiaryFixedDim: Color(0xff2e5c5c),
      onTertiaryFixedVariant: Color(0xffffffff),
      surfaceDim: Color(0xffc5c8bd),
      surfaceBright: Color(0xfff8faf0),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xfff3f5ea),
      surfaceContainer: Color(0xffe7e9df),
      surfaceContainerHigh: Color(0xffdcded3),
      surfaceContainerHighest: Color(0xffd0d3c8),
    );
  }

  ThemeData lightMediumContrast() {
    return theme(lightMediumContrastScheme());
  }

  static ColorScheme lightHighContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.light,
      primary: Color(0xff153302),
      surfaceTint: Color(0xff466730),
      onPrimary: Color(0xffffffff),
      primaryContainer: Color(0xff32511d),
      onPrimaryContainer: Color(0xffffffff),
      secondary: Color(0xff242f1c),
      onSecondary: Color(0xffffffff),
      secondaryContainer: Color(0xff414d37),
      onSecondaryContainer: Color(0xffffffff),
      tertiary: Color(0xff003232),
      onTertiary: Color(0xffffffff),
      tertiaryContainer: Color(0xff215050),
      onTertiaryContainer: Color(0xffffffff),
      error: Color(0xff600004),
      onError: Color(0xffffffff),
      errorContainer: Color(0xff98000a),
      onErrorContainer: Color(0xffffffff),
      surface: Color(0xfff8faf0),
      onSurface: Color(0xff000000),
      onSurfaceVariant: Color(0xff000000),
      outline: Color(0xff292e24),
      outlineVariant: Color(0xff464b40),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xff2e312a),
      inversePrimary: Color(0xffacd28f),
      primaryFixed: Color(0xff32511d),
      onPrimaryFixed: Color(0xffffffff),
      primaryFixedDim: Color(0xff1c3a07),
      onPrimaryFixedVariant: Color(0xffffffff),
      secondaryFixed: Color(0xff414d37),
      onSecondaryFixed: Color(0xffffffff),
      secondaryFixedDim: Color(0xff2b3622),
      onSecondaryFixedVariant: Color(0xffffffff),
      tertiaryFixed: Color(0xff215050),
      onTertiaryFixed: Color(0xffffffff),
      tertiaryFixedDim: Color(0xff023939),
      onTertiaryFixedVariant: Color(0xffffffff),
      surfaceDim: Color(0xffb7bab0),
      surfaceBright: Color(0xfff8faf0),
      surfaceContainerLowest: Color(0xffffffff),
      surfaceContainerLow: Color(0xfff0f2e7),
      surfaceContainer: Color(0xffe1e4d9),
      surfaceContainerHigh: Color(0xffd3d5cb),
      surfaceContainerHighest: Color(0xffc5c8bd),
    );
  }

  ThemeData lightHighContrast() {
    return theme(lightHighContrastScheme());
  }

  static ColorScheme darkScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffacd28f),
      surfaceTint: Color(0xffacd28f),
      onPrimary: Color(0xff193705),
      primaryContainer: Color(0xff2f4f1b),
      onPrimaryContainer: Color(0xffc7eea9),
      secondary: Color(0xffbdcbaf),
      onSecondary: Color(0xff283420),
      secondaryContainer: Color(0xff3e4a35),
      onSecondaryContainer: Color(0xffd9e7ca),
      tertiary: Color(0xffa0cfce),
      onTertiary: Color(0xff003737),
      tertiaryContainer: Color(0xff1e4e4e),
      onTertiaryContainer: Color(0xffbbeceb),
      error: Color(0xffffb4ab),
      onError: Color(0xff690005),
      errorContainer: Color(0xff93000a),
      onErrorContainer: Color(0xffffdad6),
      surface: Color(0xff11140e),
      onSurface: Color(0xffe1e4d9),
      onSurfaceVariant: Color(0xffc4c8bb),
      outline: Color(0xff8e9286),
      outlineVariant: Color(0xff43483e),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffe1e4d9),
      inversePrimary: Color(0xff466730),
      primaryFixed: Color(0xffc7eea9),
      onPrimaryFixed: Color(0xff0a2100),
      primaryFixedDim: Color(0xffacd28f),
      onPrimaryFixedVariant: Color(0xff2f4f1b),
      secondaryFixed: Color(0xffd9e7ca),
      onSecondaryFixed: Color(0xff141e0c),
      secondaryFixedDim: Color(0xffbdcbaf),
      onSecondaryFixedVariant: Color(0xff3e4a35),
      tertiaryFixed: Color(0xffbbeceb),
      onTertiaryFixed: Color(0xff002020),
      tertiaryFixedDim: Color(0xffa0cfce),
      onTertiaryFixedVariant: Color(0xff1e4e4e),
      surfaceDim: Color(0xff11140e),
      surfaceBright: Color(0xff373a33),
      surfaceContainerLowest: Color(0xff0c0f09),
      surfaceContainerLow: Color(0xff191d16),
      surfaceContainer: Color(0xff1d211a),
      surfaceContainerHigh: Color(0xff282b24),
      surfaceContainerHighest: Color(0xff33362f),
    );
  }

  ThemeData dark() {
    return theme(darkScheme());
  }

  static ColorScheme darkMediumContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffc1e8a3),
      surfaceTint: Color(0xffacd28f),
      onPrimary: Color(0xff102c00),
      primaryContainer: Color(0xff779b5e),
      onPrimaryContainer: Color(0xff000000),
      secondary: Color(0xffd3e1c4),
      onSecondary: Color(0xff1e2916),
      secondaryContainer: Color(0xff88957b),
      onSecondaryContainer: Color(0xff000000),
      tertiary: Color(0xffb5e5e4),
      onTertiary: Color(0xff002b2b),
      tertiaryContainer: Color(0xff6b9998),
      onTertiaryContainer: Color(0xff000000),
      error: Color(0xffffd2cc),
      onError: Color(0xff540003),
      errorContainer: Color(0xffff5449),
      onErrorContainer: Color(0xff000000),
      surface: Color(0xff11140e),
      onSurface: Color(0xffffffff),
      onSurfaceVariant: Color(0xffdaded0),
      outline: Color(0xffafb4a6),
      outlineVariant: Color(0xff8d9286),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffe1e4d9),
      inversePrimary: Color(0xff31501c),
      primaryFixed: Color(0xffc7eea9),
      onPrimaryFixed: Color(0xff051500),
      primaryFixedDim: Color(0xffacd28f),
      onPrimaryFixedVariant: Color(0xff1f3d0b),
      secondaryFixed: Color(0xffd9e7ca),
      onSecondaryFixed: Color(0xff0a1404),
      secondaryFixedDim: Color(0xffbdcbaf),
      onSecondaryFixedVariant: Color(0xff2e3a25),
      tertiaryFixed: Color(0xffbbeceb),
      onTertiaryFixed: Color(0xff001414),
      tertiaryFixedDim: Color(0xffa0cfce),
      onTertiaryFixedVariant: Color(0xff073d3d),
      surfaceDim: Color(0xff11140e),
      surfaceBright: Color(0xff42463e),
      surfaceContainerLowest: Color(0xff060804),
      surfaceContainerLow: Color(0xff1b1f18),
      surfaceContainer: Color(0xff262922),
      surfaceContainerHigh: Color(0xff30342d),
      surfaceContainerHighest: Color(0xff3c3f37),
    );
  }

  ThemeData darkMediumContrast() {
    return theme(darkMediumContrastScheme());
  }

  static ColorScheme darkHighContrastScheme() {
    return const ColorScheme(
      brightness: Brightness.dark,
      primary: Color(0xffd4fcb5),
      surfaceTint: Color(0xffacd28f),
      onPrimary: Color(0xff000000),
      primaryContainer: Color(0xffa8ce8b),
      onPrimaryContainer: Color(0xff030e00),
      secondary: Color(0xffe7f5d7),
      onSecondary: Color(0xff000000),
      secondaryContainer: Color(0xffbac7ab),
      onSecondaryContainer: Color(0xff050e02),
      tertiary: Color(0xffc9f9f8),
      onTertiary: Color(0xff000000),
      tertiaryContainer: Color(0xff9ccbca),
      onTertiaryContainer: Color(0xff000e0e),
      error: Color(0xffffece9),
      onError: Color(0xff000000),
      errorContainer: Color(0xffffaea4),
      onErrorContainer: Color(0xff220001),
      surface: Color(0xff11140e),
      onSurface: Color(0xffffffff),
      onSurfaceVariant: Color(0xffffffff),
      outline: Color(0xffedf2e3),
      outlineVariant: Color(0xffc0c4b7),
      shadow: Color(0xff000000),
      scrim: Color(0xff000000),
      inverseSurface: Color(0xffe1e4d9),
      inversePrimary: Color(0xff31501c),
      primaryFixed: Color(0xffc7eea9),
      onPrimaryFixed: Color(0xff000000),
      primaryFixedDim: Color(0xffacd28f),
      onPrimaryFixedVariant: Color(0xff051500),
      secondaryFixed: Color(0xffd9e7ca),
      onSecondaryFixed: Color(0xff000000),
      secondaryFixedDim: Color(0xffbdcbaf),
      onSecondaryFixedVariant: Color(0xff0a1404),
      tertiaryFixed: Color(0xffbbeceb),
      onTertiaryFixed: Color(0xff000000),
      tertiaryFixedDim: Color(0xffa0cfce),
      onTertiaryFixedVariant: Color(0xff001414),
      surfaceDim: Color(0xff11140e),
      surfaceBright: Color(0xff4e5149),
      surfaceContainerLowest: Color(0xff000000),
      surfaceContainerLow: Color(0xff1d211a),
      surfaceContainer: Color(0xff2e312a),
      surfaceContainerHigh: Color(0xff393c35),
      surfaceContainerHighest: Color(0xff454840),
    );
  }

  ThemeData darkHighContrast() {
    return theme(darkHighContrastScheme());
  }


  ThemeData theme(ColorScheme colorScheme) => ThemeData(
     useMaterial3: true,
     brightness: colorScheme.brightness,
     colorScheme: colorScheme,
     textTheme: textTheme.apply(
       bodyColor: colorScheme.onSurface,
       displayColor: colorScheme.onSurface,
     ),
     scaffoldBackgroundColor: colorScheme.background,
     canvasColor: colorScheme.surface,
  );


  List<ExtendedColor> get extendedColors => [
  ];
}

class ExtendedColor {
  final Color seed, value;
  final ColorFamily light;
  final ColorFamily lightHighContrast;
  final ColorFamily lightMediumContrast;
  final ColorFamily dark;
  final ColorFamily darkHighContrast;
  final ColorFamily darkMediumContrast;

  const ExtendedColor({
    required this.seed,
    required this.value,
    required this.light,
    required this.lightHighContrast,
    required this.lightMediumContrast,
    required this.dark,
    required this.darkHighContrast,
    required this.darkMediumContrast,
  });
}

class ColorFamily {
  const ColorFamily({
    required this.color,
    required this.onColor,
    required this.colorContainer,
    required this.onColorContainer,
  });

  final Color color;
  final Color onColor;
  final Color colorContainer;
  final Color onColorContainer;
}
