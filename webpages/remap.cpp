float remap(in float value, in float original_min, in float original_max, in float new_min, in float new_max)
{
	return new_min + ( ((value - original_min) / (original_max - original_min)) * (new_max - new_min) );
}
