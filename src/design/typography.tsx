import { StyledProps, styled } from "nativewind";
import { ComponentProps, forwardRef } from "react";
import { Linking, Platform, Text as NativeText, TextStyle } from "react-native";

export const Text = styled(NativeText);

/**
 * You can use this pattern to create components with default styles
 */
export const P = styled(NativeText, "text-base text-black my-4");

/**
 * Components can have defaultProps and styles
 */
export const H1 = styled(NativeText, "text-3xl font-extrabold my-4");
H1.defaultProps = {
	accessibilityRole: "header",
};

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof Text> {
	href?: string;
	target?: "_blank";
}

export const A = forwardRef<NativeText, StyledProps<AProps>>(function A(
	{ className = "", href, target, ...props },
	ref,
) {
	const nativeAProps = Platform.select<Partial<AProps>>({
		web: {
			href,
			target,
		},
		default: {
			onPress: (event) => {
				props.onPress?.(event);
				if (Platform.OS !== "web" && href !== undefined) {
					Linking.openURL(href);
				}
			},
		},
	});

	return (
		<Text
			accessibilityRole="link"
			className={`text-blue-500 hover:underline ${className}`}
			{...props}
			{...nativeAProps}
			ref={ref}
		/>
	);
});
